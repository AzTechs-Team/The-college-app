// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// import Title from '../Components/Title'
// import Footer from '../Components/Footer';

// //declaring styles for Signup component
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// //declaring signup class using React Component
// class Signup extends React.Component  {

//    //declaring state of class to help extract data from user input
//   state = {
//     name: '',
//     username:'',
//     email:'',
//     password:'',

// 	}

//   //declaring function to change state based on user input
// 	handleNameChange = (e) => this.setState({
// 		name: e.target.value
//   });
// 	handlePwdChange = (e) => this.setState({
// 	  password: e.target.value
//   });
// 	handleEmailChange = (e) => this.setState({
// 	  email: e.target.value
//   });
// 	handleUserChange = (e) => this.setState({
// 	  username: e.target.value
//   });

//   //decalring function to handle data recieved from user input.
//   //Data is converted to a JSON object
//   handleData = () =>{
//     var data = { name: this.state.name, username:this.state.username,
//       email:this.state.email, password: this.state.password };
//     data = JSON.stringify(data);
//     console.log(data);
//     this.setState({
//       name: '',
//       username: '',
//       email: '',
//       password:''
//     })
//   }

//   //Rendering components which will be returened on page
//   render() {
//   return (
//     <div>
//      <Title name="Signup"/>
//     <form className={useStyles.root} noValidate autoComplete="off" >
//         <TextField
//           id="outlined-name-input"
//           label="Name"
//           type="text"
//           variant="outlined"
//           value={this.state.name}
// 				  onChange={this.handleNameChange}
//           />
//         <br/>
//         <TextField
//           id="outlined-username-input"
//           label="Username"
//           type="text"
//           variant="outlined"
//           value={this.state.username}
// 				  onChange={this.handleUserChange}
//           />
//         <br/>
//         <TextField
//           id="outlined-email-input"
//           label="Email"
//           type="email"
//           variant="outlined"
//           value={this.state.email}
// 				  onChange={this.handleEmailChange}
//           />
//         <br/>
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           variant="outlined"
//           value={this.state.password}
// 				  onChange={this.handlePwdChange}

//         />
//         <br/><br/>
//          <Button variant="contained" onClick={this.handleData}  >Signup</Button>

//          <Typography>Already have an account??</Typography>
//          <Button color="default" component={Link} to="/login">Login Now</Button>
//     </form>
//     <Footer/>
//     </div>
//   );

// }
// }
// export default Signup;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
