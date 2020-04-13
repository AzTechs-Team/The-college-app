import React from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Form from '../Components/SignUpForm';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Home;
