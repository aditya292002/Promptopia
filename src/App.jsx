import React, { useState } from 'react';
import Header from './components/header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import { useAuth0 } from "@auth0/auth0-react";
import allPrompts from './components/prompts';

function App() {
  const { user, loginWithRedirect, logout } = useAuth0();
  console.log("Current User : ", user);

  const [prompts, setPrompts] = useState(allPrompts);
  
  function addPrompt(newPrompt) {
    setPrompts(prevPrompts => {
      return [...prevPrompts, newPrompt];
    });
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
