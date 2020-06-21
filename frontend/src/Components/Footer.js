import React ,{Component}from "react";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import { Card, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import '../Styles/margin.css'



const Styles=((theme) => ({
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
    },
    hide_btn:{
      display:'none'
    },
    resp:{
      color:'white',
      textAlign:'center'
    }
  }));



class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      email:''
    }
 };

  handleEmailChange = (e) =>
  this.setState({
    email: e.target.value,
  });

  Copyright=()=> {
    return (
      <Typography variant="body2" color="textSecondary" style={{textAlign:'center',marginTop:8,color:'white'}}>
        {"Copyright © "}
        
          Aztechs
        {" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  render(){
    const { classes,route,loginStatus}  = this.props;

    const url =
      "https://gmail.us10.list-manage.com/subscribe/post?u=471004c5f312ad1088d346627&amp;id=ef035ee544";


  
    return (
      <div className={classes.root} id="footer">
        <CssBaseline />
        <Card  className={classes.a}>
          {route !== "signup" && route!=='login' && !loginStatus?
          <div>
            <MailchimpSubscribe url={url}
            render={({ subscribe,status}) => (
              <div>
              <div className={classes.newsletter}>
                <div>
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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                <Button variant="contained"  
                onClick={()=>{
                  let data={EMAIL:this.state.email}
                  subscribe(data)}}
                  className={status==="success"?classes.hide_btn:classes.btn_1}>
                  Subscribe
                </Button>
                
                </div>
                {status==="success"?
                  <div>
                    <Typography variant="body1" className={classes.resp}>
                      Thank you for subscribing.Check your email 
                      for latest updates</Typography>
                    <br/>
                  </div>
                :null}
                {status==='sending'?
                  <div>
                    <Typography variant="body2" className={classes.resp}
                    style={{color:'#bfbfbf'}}>
                      Subscribing...</Typography>
                      <br/></div>
                  :null}
                {status==="error"?
                  <div>
                    <Typography variant="body2" className={classes.resp}
                      style={{color:'#e84a5f'}}>
                      Something went wrong. Please try again 
                      or use a different email id.</Typography><br/>
                  </div>
              :null}
             </div>
          )}
          />
          <Divider variant="middle"
          style={{backgroundColor:'#4e4e4e'}}/>
          </div>
          :
          null
          }
 
        
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
        {this.Copyright()}
        </Card>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Footer);