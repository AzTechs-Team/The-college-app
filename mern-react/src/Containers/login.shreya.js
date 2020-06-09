import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, } from "react-router-dom";
import "../Styles/margin.css";
import Title from "../Components/Title";

//declaring styles for Login component
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

//declaring login class using React Component
class Login extends React.Component {
  //declaring state of class to help extract data from user input
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
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
    fetch('http://localhost:3001/login',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          email:this.state.email,
          password:this.state.password
      })
  })
  .then(res=>res.json())
  .then(user=>{
      if(user._id){
        this.props.onRouteChange('user')
        this.props.loadUser(user)
        this.props.loggedIn(true)

      }
    
  })
  };

  //Rendering components which will be returened on page
  render() {
    return (
      <div >
        <Title name="Login" />
        <div id="login">
          <form
            className={`${useStyles.root} `}
            
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-username-input"
              label="Email"
              type="text"
              variant="outlined"
              className="email-input"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <br />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePwdChange}
              autoComplete="current-password"
              variant="filled"
            />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={this.handleData}
              style={{
                backgroundColor: "primary",
              }}
              component={Link}
              to={`/user`}
            >
              Login
            </Button>
            <br />
            <br />

            <Typography>Don't have an account yet??</Typography>
            <Button color="default" component={Link} to="/signup">
              Signup Now
            </Button>
          </form>
        </div>
       
      </div>
    );
  }
}

export default Login;
