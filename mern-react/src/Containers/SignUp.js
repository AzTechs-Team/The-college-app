import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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


class Signup extends React.Component  {
  state = {
    name: '',
    username:'',
    email:'',
    password:'',

	}
 
	handleNameChange = (e) => this.setState({
		name: e.target.value
  });
	handlePwdChange = (e) => this.setState({
	  password: e.target.value
  });
	handleEmailChange = (e) => this.setState({
	  email: e.target.value
  });
	handleUserChange = (e) => this.setState({
	  username: e.target.value
  });
  
  handleData = () =>{
    var data = { name: this.state.name, username:this.state.username,
      email:this.state.email, password: this.state.password };
    data = JSON.stringify(data);
    console.log(data);
    this.setState({
      name: '',
      username: '',
      email: '',
      password:''
    })
  }

  render() {
  return (
    <div>
    
    <form className={useStyles.root} noValidate autoComplete="off" >
        <TextField
          id="outlined-name-input"
          label="Name"
          type="text"
          variant="outlined"
          value={this.state.name}
				  onChange={this.handleNameChange}
          />
        <br/>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="text"
          variant="outlined"
          value={this.state.username}
				  onChange={this.handleUserChange}
          />
        <br/>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          variant="outlined"
          value={this.state.email}
				  onChange={this.handleEmailChange}
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
         <Button variant="contained" onClick={this.handleData}  >Signup</Button>
        

         <Typography>Already have an account??</Typography>
         <Button color="default" component={Link} to="/login">Login Now</Button>
    </form>

    </div>
  );
  
}
}
export default Signup;


