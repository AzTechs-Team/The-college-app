import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="nav-bar">
            <ul>
                <li><Link to="/">College App</Link></li>
                <li id="log-in"><Link to="/Login"><button>Log in</button></Link></li>
                <li id="sign-up"><Link to="/signup"><button>Sign up</button></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;