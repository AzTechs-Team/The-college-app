// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";
// import "../Styles/Login.css";
// import Title from "../Components/Title";
// import Footer from "../Components/Footer";
// import red from "@material-ui/core/colors/red";

// const primary = red[500];

// //declaring styles for Login component
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// //declaring login class using React Component
// class Login extends React.Component {
//   //declaring state of class to help extract data from user input
//   state = {
//     name: "",
//     password: "",
//   };

//   //declaring function to change state "name" based on user input
//   handleNameChange = (e) =>
//     this.setState({
//       name: e.target.value,
//     });

//   //declaring function to change state "password" based on user input
//   handlePwdChange = (e) =>
//     this.setState({
//       password: e.target.value,
//     });

//   //decalring function to handle data recieved from user input.
//   //Data is converted to a JSON object
//   handleData = () => {
//     var data = { name: this.state.name, password: this.state.password };
//     data = JSON.stringify(data);
//     console.log(data);
//     this.setState({
//       name: "",
//       password: "",
//     });
//   };

//   //Rendering components which will be returened on page
//   render() {
//     return (
//       <div>
//         <Title name="Login" />
//         <form
//           className={`${useStyles.root} "form-login"`}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//             id="outlined-username-input"
//             label="Name"
//             type="text"
//             variant="outlined"
//             className="name-input"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//           <br />
//           {/* <TextField
//             id="outlined-password-input"
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={this.state.password}
// 				    onChange={this.handlePwdChange}
//           /> */}

//           <br />
//           <TextField
//             id="filled-password-input"
//             label="Password"
//             type="password"
//             value={this.state.password}
//             onChange={this.handlePwdChange}
//             autoComplete="current-password"
//             variant="filled"
//           />
//           <br />
//           <br />
//           <Button
//             variant="contained"
//             onClick={this.handleData}
//             style={{
//               backgroundColor: "primary",
//             }}
//           >
//             Login
//           </Button>
//           <br />
//           <br />

//           <Typography>Don't have an account yet??</Typography>
//           <Button color="default" component={Link} to="/signup">
//             Signup Now
//           </Button>
//         </form>
//         <br />
//         <br />
//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default Login;

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
