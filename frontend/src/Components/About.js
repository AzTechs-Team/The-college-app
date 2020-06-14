import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

//Styling the about component using styles from material ui
const useStyles = makeStyles ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: '100%',
      height: 'auto',
      backgroundColor: '#4e4e4e',
      color:'#fff',
      padding:'30px 50px',
      textAlign:'center'
    },
    },
    btn_1: {
      backgroundColor: "#e84a5f",
      marginRight: "10px",
      borderRadius: "5px",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#4e4e4e",
        color: "#e84a5f",
        boxShadow: "none",
      },
  }
});

//declaring and exporting function "about"
export default function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} ><br/>
      <Typography varient="p">
      {props.desc}
      </Typography><br/>
      <Button  variant="contained" 
        className={classes.btn_1}
      onClick={() => {
        props.onRouteChange("events");
      }}>
          {props.btn}
        </Button>
      </Paper>
    </div>
  );
}