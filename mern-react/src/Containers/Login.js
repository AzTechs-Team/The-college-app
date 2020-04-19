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


function Login() {
  const classes = useStyles();

  
  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off" >
        <TextField
          id="outlined-username-input"
          label="Name"
          type="text"
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
        />
        <br/><br/>
         <Button variant="contained" type="submit"  >Login</Button>
        <br/><br/><br/>

        <Typography>Don't have an account yet??</Typography>
        <Button color="default" component={Link} to="/signup">Signup Now</Button>
    </form>

    </div>
  );
  
}

export default Login;




