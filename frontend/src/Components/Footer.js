import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Card, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Styles/margin.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{textAlign:'center',marginTop:8,color:'white'}}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Aztechs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

    "& .MuiButton-root":{
        paddingTop:0,
    },
    "& .MuiTextField-root":{
      color:'white'
    }
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign:'center',
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  a:{
    backgroundColor:'#131313',


  },
  newsletter:{
    padding:"2% 3%",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    textAlign:'center',
    border:0,
    color:'white',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      alignItems:'center'
    },
  },
  email:{
    width:'45%',
    height:'47px',
    color:'white',
    backgroundColor:'#bfbfbf',
    borderRadius:'7px'
  },
  btn_1: {
    backgroundColor: "#e84a5f",
    paddingTop:theme.spacing(0),
    paddingBottom:theme.spacing(0),
    marginTop:theme.spacing(0),
    borderRadius: "5px",
    boxShadow: "none",
    height:"40px",
    "&:hover": {
      backgroundColor: "#131313",
      color: "#e84a5f",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop:10
    },
  },
  info:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    border:0,
    backgroundColor:'#181818',
    color:'white',
    padding:'3% 18%',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
    },
  },
  two:{
    [theme.breakpoints.down("sm")]: {
      marginTop:10
    },
  },
  icons:{
    fontSize: 25,
    color:'white' 
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer">
      <CssBaseline />
      <Card  className={classes.a}>
        <div className={classes.newsletter}>
        <div >
            <Typography variant="h6"> Be the first to get updates!</Typography>
            <Typography variant="body2">Subscribe and join our newletter today.</Typography>
          </div>
          <TextField
              id="outlined-basic"
              variant="filled"
              label="Email"
              type="text"
              className={` ${classes.email}`}
              color="secondary"
            />
            <Button variant="contained" className={classes.btn_1} >
              Subscribe
            </Button>
        </div>

      <Divider variant="middle"
      style={{backgroundColor:'#4e4e4e'}}/>
        <div className={classes.info}>
          <div >
            <Typography variant="body1">
              About
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque elementum volutpat sem, nec 
                tincidunt mi laoreet et vestibulum. 
            </Typography>
          </div>
          <div className={classes.two}>
            <Typography variant="body1">
              Information
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque elementum volutpat sem, nec 
                tincidunt mi laoreet et. 
            </Typography>
          </div>
      </div>
      <Divider variant="middle" />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',
        marginTop:5,marginBotton:10,alignItems:'center'}}>
        <img src={require("../Images/Logo.png")} height="35" width="35"
        style={{marginLeft:65}} alt="logo"/>
        <Divider 
        orientation="vertical"  
        flexItem={true}
        style={{marginLeft:45,marginRight:35,backgroundColor:'#4e4e4e'}}/>
        <TwitterIcon className={classes.icons}/>&ensp;
        <InstagramIcon className={classes.icons}/>&ensp;
        <FacebookIcon className={classes.icons}/>&ensp;
        <GitHubIcon className={classes.icons}/><br/><br/>
      </div>
      <Copyright />
      </Card>
    </div>
  );
}
