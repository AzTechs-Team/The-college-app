import React from 'react';
// import logo from './logo.svg';
import About from '../Components/About';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
//import './App.css';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <About/>
      <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
