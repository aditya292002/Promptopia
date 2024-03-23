import React from "react";
import userImageAndrew from '../assets/andrew.jpeg';
import userImageSwati from '../assets/swati.jpeg';

function Note(props) {
    var tags = props.tags;
    var tagList = tags.split("#").filter(tag => tag !== ""); // Split tags by "#" and remove empty strings
    var userImage = props.userImage;
    if(userImage === "../assets/andrew.jpeg") {
        userImage = userImageAndrew;
    }
    else if(userImage === '../assets/swati.jpeg') {
        userImage = userImageSwati;
    }

    return (
        <div className="note">
            <div className="new-node">New Node at the Beginning</div>
            <img src={userImage} alt="user-image" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {tagList.map((tag, index) => (
                <p key={index} style={{ display: "inline-block", color: "blue" }}>#{tag}</p>
            ))}
        </div>
    );
}

export default Note;