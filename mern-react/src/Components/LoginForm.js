import React from 'react';
import { Link } from 'react-router-dom';
function LoginForm(){
    return(
        <div className="sign-up-form">
            <form>
                <label>Name</label>
                <input type="text"/>
                <br/><br/>
                <label>Password</label>
                <input type="password"/>
                

                <br/><br/><br/><br/>
                <p>Don't have an account yet??</p>
                <Link to="/Signup"><button>Sign Up now</button></Link>
            </form>
        </div>
    )
}

export default LoginForm;