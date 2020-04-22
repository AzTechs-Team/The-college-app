import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../Styles/Login.css'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
}));


class Login extends React.Component  {
  state = {
    name: '',
    password:''
	}
 
	handleNameChange = (e) => this.setState({
		name: e.target.value
  });

	handlePwdChange = (e) => this.setState({
	  password: e.target.value
  });
  
  handleData = () =>{
    var data = { name: this.state.name, password: this.state.password };
    data = JSON.stringify(data);
    console.log(data);
    this.setState({
      name: '',
      password:''
    })
  }
 
  render() {
    return (
      <div>
      <form className={useStyles.root,"form-login"} noValidate autoComplete="off" >
 
          <TextField
            id="outlined-username-input"
            label="Name"
            type="text"
            variant="outlined"
            className="name-input"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br/>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            value={this.state.password}
				    onChange={this.handlePwdChange}
          />
          <br/><br/>
           <Button variant="contained" onClick={this.handleData} >Login</Button>
          <br/><br/><br/>
  
          <Typography>Don't have an account yet??</Typography>
          <Button color="default" component={Link} to="/signup" 
          >Signup Now</Button>
          
      </form>
  
      </div>
    );
	}
  
  
  
}

export default Login;


