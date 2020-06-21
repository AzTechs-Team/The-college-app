import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../Styles/margin.css";
import Title from "../Components/Title";
import { FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//declaring login class using React Component
class Login extends React.Component {
  //declaring state of class to help extract data from user input
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: false,
    };
  }

  //declaring function to change state "name" based on user input
  handleEmailChange = (e) =>
    this.setState({
      email: e.target.value,
    });

  //declaring function to change state "password" based on user input
  handlePwdChange = (e) =>
    this.setState({
      password: e.target.value,
    });

  //decalring function to handle data recieved from user input.
  //Data is converted to a JSON object
  handleData = () => {
    fetch("http://localhost:3001/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user._id) {
          this.props.onRouteChange("user");
          this.props.loadUser(user);
          this.props.loggedIn(true);
        }
      })
      .catch((err) => {
        this.setState({ err: true });
        console.log("idar tak aaya mai");
      });
  };

  //Rendering components which will be returened on page
  render() {
    return (
      <div style={{backgroundColor:"#2d2d2d",color:"white"}}>
        <Title name="Login" />
        <div id="login" >
        <Grid container 
          style={{ display: "flex", justifyContent: "center"}}>
            <Grid item md={5} xs={10}>
          <form noValidate autoComplete="off">
          <FormGroup >
            <TextField
              id="outlined-username-input"
              label="Email"
              type="text"
              variant="filled"
              className="email-input"
              value={this.state.email}
              onChange={this.handleEmailChange}
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}
              required
            />
            <br />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePwdChange}
              autoComplete="current-password"
              variant="filled"
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}
              required
            />
            <br />
            <Button
              variant="contained"
              onClick={this.handleData}
              style={{width:180,alignSelf:'center'
            ,backgroundColor:"#e84a5f",color:"#131313",}}
              component={Link}
              to={`/user`}
            >
              Login
            </Button>
            <br />
            {/* {this.state.err ? (
              <Typography align="center" style={{ color: "#e84a5f" }}>
                Email/Password Incorrect. Please try again.
              </Typography>
            ) : null} */}
              <br/><br/><br/>
            <Typography align="center">Don't have an account yet??</Typography>
            <Button color="default" component={Link} to="/signup"
            style={{width:150,alignSelf:'center',
            backgroundColor:"#bfbfbf",color:"#000"}}
              onClick={() => {
                this.props.onRouteChange("signup");
              }}>
              Signup Now
            </Button>
            </FormGroup>
          </form>
          </Grid></Grid>
        </div><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Login;