import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Containers/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Containers/Login";
import UserHome from "./Containers/UserHome";
import SignUp from "./Containers/Signup";
import Events from "./Containers/Events";
import Clubs from "./Containers/Clubs";
import Resources from "./Containers/Resources";
import Contact from "./Containers/Contact";

//Only navbar is defined as the content to be rendered is inside navbar
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      loginStatus: false,
      user: {
        id: "",
        name: "",
        email: "",
        username: "",
        phone: "",
        department: "",
      },
    };
  }

  UNSAFE_componentWillMount = () => {
    if (localStorage.length === 0) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          token: null,
          loginStatus: false,
        })
      );
    }
    this.loggedIn();
  };

  componentDidUpdate = () => {
    this.loggedIn();
  };

  loadToken = (data) => {
    localStorage.setItem(
      "login",
      JSON.stringify({
        token: data.token,
        loginStatus: true,
      })
    );
    this.loadUser();
  };

  loadUser = () => {
    fetch("https://cluster-aztechs.herokuapp.com/user", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: JSON.parse(localStorage.getItem("login")).token,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        let login = JSON.parse(localStorage.getItem("login")).loginStatus;
        this.setState({
          loginStatus: login,
          user: {
            name: user.name,
            email: user.email,
            username: user.username,
            phone: user.phone,
            department: user.department,
          },
        });
      })
      .catch((err) => console.log("fuck this shit. imma go cry now."));
  };

  loggedIn = () => {
    let login = JSON.parse(localStorage.getItem("login")).loginStatus;
    if (login) {
      this.loadUser();
    } else {
      localStorage.setItem(
        "login",
        JSON.stringify({
          token: null,
          loginStatus: false,
        })
      );
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            loginStatus={JSON.parse(localStorage.getItem("login")).loginStatus}
            loggedIn={this.loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login loadToken={this.loadToken} loggedIn={this.loggedIn} />
            </Route>
            <Route path="/signup">
              <SignUp loadToken={this.loadToken} />
            </Route>
            <Route path={`/user`}>
              <UserHome
                user={this.state.user}
                loginStatus={
                  JSON.parse(localStorage.getItem("login")).loginStatus
                }
              />
            </Route>
            <Route path="/resources">
              <Resources
                loginStatus={
                  JSON.parse(localStorage.getItem("login")).loginStatus
                }
              />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/clubs">
              <Clubs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer route={this.state.route} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
