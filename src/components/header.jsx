import React from "react";
import ShortTextIcon from '@mui/icons-material/ShortText';

function Header(props) {
    return (
        <header>
            <h1><ShortTextIcon /> Promptopia</h1>
            {props.userIs ? (
                <div>
                    <img src={props.userIs.picture} alt="user image" />
                    <p  onClick={() => props.logoutFunction({ logoutParams: { returnTo: window.location.origin } })}>logout</p>
                </div>
            ) : (
                <div>
                <p onClick={props.loginRedirect}>login</p>
                </div>
            )}
        </header>
    );
}

export default Header;
