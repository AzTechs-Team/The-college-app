import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Containers/Home';
import Footer from './Components/Footer';
import { Route} from "react-router-dom";
import Login from "./Containers/login.shreya";
import UserHome from "./Containers/UserHome";
import SignUp from "./Containers/Signup.shreya";
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
        username:''
      }
    }
  }

  loadUser = (data) =>{
    this.setState({
      user:{
        id:data._id,
        username:data.username,
        name:data.name,
        email:data.email
      }
    })
  }

  loggedIn=(status)=>{
    this.setState({loginStatus:status})
  }

  onRouteChange=(route)=>{
    this.setState({route:route})
  }

  render(){
    
    return (
      <div>
        <Navbar onRouteChange={this.onRouteChange} loginStatus={this.state.loginStatus} loggedIn={this.loggedIn}/>
        {/* <Home/> */}

        {this.state.route==="home"
          ?<Route exact link="/" component={Home}/>
          :(
            this.state.route==='login'
            ?<Route link="/login"><Login onRouteChange={this.onRouteChange} 
            loadUser={this.loadUser} loggedIn={this.loggedIn} loginStatus={this.state.loginStatus}/></Route>
            :(
              this.state.route==='signup'
              ?(
                <Route link="/signup"><SignUp onRouteChange={this.onRouteChange} 
                loadUser={this.loadUser} loggedIn={this.loggedIn}/></Route>
              )
              :(
                this.state.route==='user'
                ?<Route link='/user'><UserHome name={this.state.user.name} /></Route>
                :(
                  this.state.route==='events'
                  ?<Route link="/events"><Events/></Route>
                  :(
                    this.state.route==='clubs'
                    ?<Route link="/clubs"><Clubs /></Route>
                    :(
                      this.state.route==='resources'
                      ?<Route link="/resources"><Resources/></Route>
                      :(
                        this.state.route==='contact'
                        ?<Route link="/contact"><Contact/></Route>
                        :<h1>404 page not found</h1>
                      )
                    )
                  )
                )
              )
            )
          )
        }
        

        <Footer/>
      </div>
    );
  }

}

export default App;
