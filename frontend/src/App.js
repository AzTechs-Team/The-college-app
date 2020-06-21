import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Containers/Home';
import Footer from './Components/Footer';
import { Route} from "react-router-dom";
import Login from "./Containers/Login";
import UserHome from "./Containers/UserHome";
import SignUp from "./Containers/Signup";
import Events from './Containers/Events';
import Clubs from './Containers/Clubs';
import Resources from './Containers/Resources';
import Contact from './Containers/Contact';


//Only navbar is defined as the content to be rendered is inside navbar
class App extends Component{
  constructor(){
    super();
    this.state={
      route:'home',
      loginStatus:false,
      user:{
        id:'',
        name:'',
        email:'',
        username:'',
        phone:'',
        department:''
      }
    }
  }

  loadUser = (data) =>{
    this.setState({
      user:{
        id:data._id,
        username:data.username,
        name:data.name,
        email:data.email,
        phone:data.phone,
        department:data.department
      }
    })
  }

  loggedIn=(status)=>{
    this.setState({loginStatus:status})
    if(!this.state.loginStatus){
      this.setState({
        user:{
          id:'',
          username:'',
          name:'',
          email:'',
          phone:'',
          department:''
        }
      })
    }
  }

  onRouteChange=(route)=>{
    this.setState({route:route})
  }

  renderSwitch(param) {
    switch(param) {
      case 'home':
        return <Route exact link="/home" >
          <Home onRouteChange={this.onRouteChange}/>
        </Route>;
      case 'login':
        return <Route link="/login">
                <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser} 
                loggedIn={this.loggedIn} loginStatus={this.state.loginStatus}/>
              </Route>
      case 'signup':
        return <Route link="/signup">
                <SignUp onRouteChange={this.onRouteChange} 
                loadUser={this.loadUser} loggedIn={this.loggedIn}/>
              </Route>
      case 'user':
        return <Route link='/user'>
                <UserHome user={this.state.user} />
              </Route>
      case 'events':
        return <Route link="/events">
                <Events/>
              </Route>
      case 'clubs':
        return <Route link="/clubs">
                <Clubs onRouteChange={this.onRouteChange}/>
              </Route>
      case 'resources':
        return <Route link="/resources">
                <Resources onRouteChange={this.onRouteChange}/>
              </Route>
      case 'contact':
        return <Route link="/contact">
                <Contact/>
              </Route>
      default:
        return '404 page not found';
    }
  }

  render(){
    
    return (
      <div>
        <Navbar 
        onRouteChange={this.onRouteChange} 
        loginStatus={this.state.loginStatus} 
        loggedIn={this.loggedIn}
        />
        {this.renderSwitch(this.state.route)}
        <Footer route={this.state.route} loginStatus={this.state.loginStatus}/>
      </div>
    );
  }

}

export default App;
