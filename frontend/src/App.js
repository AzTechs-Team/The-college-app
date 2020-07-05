import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Containers/Home";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
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

  componentDidMount = () => {
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
    fetch("http://localhost:3001/user", {
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
      });
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

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  renderSwitch(param) {
    switch (param) {
      case "home":
        return (
          <Route exact link="/home">
            <Home onRouteChange={this.onRouteChange} />
          </Route>
        );
      case "login":
        return (
          <Route link="/login">
            <Login
              onRouteChange={this.onRouteChange}
              loadToken={this.loadToken}
              loggedIn={this.loggedIn}
            />
          </Route>
        );
      case "signup":
        return (
          <Route link="/signup">
            <SignUp
              onRouteChange={this.onRouteChange}
              loadToken={this.loadToken}
            />
          </Route>
        );
      case "user":
        return (
          <Route link="/user">
            <UserHome user={this.state.user} />
          </Route>
        );
      case "events":
        return (
          <Route link="/events">
            <Events onRouteChange={this.onRouteChange} />
          </Route>
        );
      case "clubs":
        return (
          <Route link="/clubs">
            <Clubs onRouteChange={this.onRouteChange} />
          </Route>
        );
      case "resources":
        return (
          <Route link="/resources">
            <Resources onRouteChange={this.onRouteChange} />
          </Route>
        );
      case "contact":
        return (
          <Route link="/contact">
            <Contact />
          </Route>
        );
      default:
        return "404 page not found";
    }
  }

  render() {
    return (
      <div>
        <Navbar
          onRouteChange={this.onRouteChange}
          loginStatus={JSON.parse(localStorage.getItem("login")).loginStatus}
          loggedIn={this.loggedIn}
        />
        {this.renderSwitch(this.state.route)}
        <Footer route={this.state.route} />
      </div>
    );
  }
}

export default App;
