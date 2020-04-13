import React from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import LoginForm from '../Components/LoginForm';

function Login() {
  return (
    <div className="App">
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
  );
}

export default Login;
