import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import '../Styles/margin.css'
import { FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//declaring signup class using React Component


class Signup extends React.Component {
  //declaring state of class to help extract data from user input
  constructor(props){
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      department: "",
    };
  }

  //declaring function to change state based on user input
  handleNameChange = (e) =>
    this.setState({
      name: e.target.value,
    });
  handlePwdChange = (e) =>
    this.setState({
      password: e.target.value,
    });
  handleEmailChange = (e) =>
    this.setState({
      email: e.target.value,
    });
  handleUserChange = (e) =>
    this.setState({
      username: e.target.value,
    });
  handlePhoneChange = (e) =>
    this.setState({
      phone: e.target.value,
    });
  handleDepartmentChange = (e) =>
    this.setState({
      department: e.target.value,
    });

  //decalring function to handle data recieved from user input.
  //Data is converted to a JSON object
  handleData = () => {
    if(this.state.email || this.state.password || this.state.name){
      fetch(`url/signup`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          username: this.state.username,
          department: this.state.department,
          phone: this.state.phone,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user) {
            this.props.loadUser(user);
            this.props.onRouteChange("user");
            this.props.loggedIn(true);
          }
        });
    }
    
  };

  //Rendering components which will be returened on page
  render() {
    return (
      <div style={{backgroundColor:"#2d2d2d",color:"white",}}>
        <Title name="Signup" />
        <div id="signup">
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Grid item md={5} xs={10}>
          <form noValidate autoComplete="off" >
            <FormGroup >
            <TextField
              id="filled-name-input"
              label="Full name"
              type="text"
              variant="filled"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7
              }}}
              
            />
            <br />
            <TextField
              id="filled-username-input"
              label="Username"
              type="text"
              variant="filled"
              value={this.state.username}
              onChange={this.handleUserChange}
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}/>
              <br/>
            <TextField
              id="filled-phone-input"
              label="Phone"
              type="text"
              variant="filled"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}
            /><br/>
            <TextField
              id="filled-department-input"
              label="Department"
              type="text"
              variant="filled"
              value={this.state.department}
              onChange={this.handleDepartmentChange}
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}
            />
            <br />
            <TextField
              id="filled-email-input"
              label="Email"
              type="email"
              variant="filled"
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
              variant="filled"
              value={this.state.password}
              onChange={this.handlePwdChange}
              color="secondary"
              InputProps={{style:{ backgroundColor:'#bfbfbf',borderRadius:7}}}
              required
            />
            <br />
            <br />
            <Button variant="contained" onClick={this.handleData}
            component={Link} 
            to={`/user`}
            style={{width:180,alignSelf:'center'
            ,backgroundColor:"#e84a5f",color:"#131313",}}>
              Signup
            </Button>
            <br/><br/>
            <Typography align='center'>Already have an account??</Typography>
            <Button  
            component={Link} 
            to="/login" 
            style={{width:150,alignSelf:'center',
          backgroundColor:"#bfbfbf",color:"#000"}}
            onClick={() => {
              this.props.onRouteChange("login");
            }}> 
              Login Now
            </Button>
            </FormGroup>
        </form></Grid></Grid>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Signup;
