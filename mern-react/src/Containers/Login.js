import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../Styles/Login.css'
import Title from '../Components/Title'
import Footer from '../Components/Footer';

//declaring styles for Login component
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

//declaring login class using React Component
class Login extends React.Component  {

  //declaring state of class to help extract data from user input
  state = {
    name: '',
    password:''
	}
 
  //declaring function to change state "name" based on user input
	handleNameChange = (e) => this.setState({
		name: e.target.value
  });

  //declaring function to change state "password" based on user input
	handlePwdChange = (e) => this.setState({
	  password: e.target.value
  });
  

  //decalring function to handle data recieved from user input.
  //Data is converted to a JSON object
  handleData = () =>{
    var data = { name: this.state.name, password: this.state.password };
    data = JSON.stringify(data);
    console.log(data)
    this.setState({
      name: '',
      password:''
    })

  }
 
  //Rendering components which will be returened on page
  render() {
    return (
      <div >
        <Title name="Login"/>
      <form className={`${useStyles.root} "form-login"`} noValidate autoComplete="off" >
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
          <br/><br/>
  
          <Typography>Don't have an account yet??</Typography>
          <Button color="default" component={Link} to="/signup" 
          >Signup Now</Button>
          
      </form><br/><br/><br/><br/>
      <Footer/>
      </div>
    );
	}
  
}

export default Login;


