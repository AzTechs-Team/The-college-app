import React from 'react';
import { Route,Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import About from './Components/About';
// import Card from './Components/Card';
// import Navbar from './Components/Navbar';
// import Carousel from './Components/Carousel';
// import Footer from './Components/Footer';
import Home from './Containers/Home';
import SignUp from './Containers/SignUp';
import Login from './Containers/Login'
import './App.css';

function App() {
  return (
    <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
        </Switch>
        </main>
  );
}

export default App;
