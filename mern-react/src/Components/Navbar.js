import React from 'react';
import '../Styles/Navbar.css';

function Navbar(){
    return(
        <div className="nav-bar">
            <ul>
                <li>College App</li>
                <li id="log-in"><button>Log in</button></li>
                <li id="sign-up"><button>Sign up</button></li>
            </ul>
        </div>
    )
}

export default Navbar;