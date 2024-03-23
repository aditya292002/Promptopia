import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import { useAuth0 } from "@auth0/auth0-react";
import allPrompts from './components/prompts';

function App() {
  const { user, loginWithRedirect, logout } = useAuth0();
  
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const storedPrompts = JSON.parse(localStorage.getItem("allPrompts")) || allPrompts;
    setPrompts(storedPrompts);
  }, []); // Empty dependency array to run this effect only once on component mount

  function addPrompt(newPrompt) {
    const updatedPrompts = [...prompts, newPrompt];
    setPrompts(updatedPrompts);
    localStorage.setItem("allPrompts", JSON.stringify(updatedPrompts));
  }

  return (
    <>
      <Header loginRedirect={loginWithRedirect} userIs={user} logoutFunction={logout}/>
      <CreateArea userIs={user} onAdd={addPrompt}/>
      {prompts.map((promptItem, index) => {
        return (
          <Note
            key={index}
            title={promptItem.title}
            description={promptItem.description}
            tags={promptItem.tags}
            userImage={promptItem.img ? promptItem.img : (user ? user.picture : '')}
          />
        );
      })}
    </>
  );
}

export default App;
