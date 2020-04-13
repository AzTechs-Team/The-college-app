import React from 'react';
import { Link } from 'react-router-dom';
function Form(){
    return(
        <div className="sign-up-form">
            <form>
                <label>Name</label>
                <input type="text"/>
                <br/><br/>
                <label>Email</label>
                <input type="email"/>
                <br/><br/>
                <label>Passeord</label>
                <input type="password"/>
                <br/><br/>
                <Link to="/"><button>Sign Up</button></Link>
                <br/><br/><br/><br/>
                <p>Already have an account??</p>
                <Link to="/Login"><button>Login</button></Link>
            </form>
        </div>
    )
}

export default Form;