import React from 'react';
import Title from '../Components/Title'
import Map from '../Components/Map'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Styles/margin.css'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    zIndex:-3,
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    marginLeft:190,
    [theme.breakpoints.down("xs")]:{
      flexDirection:'column',
      marginLeft:0,
  }
  },
  content:{
    backgroundColor:'#4e4e4e',
    boxShadow:'3px 3px 8px #000',
    color:'white',
    height:'57vh',
    width:'50vw',
    marginLeft:'-130px',
    paddingLeft:'130px',
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down("sm")]:{
      marginLeft:0,
      marginRight:0,
      paddingLeft:0,
      marginTop:'-30px',
      paddingTop:'45px',
      width:'85vw'
  }
  },
  map:{
    [theme.breakpoints.down("sm")]:{
      width:'100%'
  }
  },
  white:{
    color:'white'
  },
  grey:{
    color:'#bfbfbf'
  }
}));

//decalring Contact to be rendered inside content of Navbar component
function Contact() {
  const classes = useStyles();
  return (
    <div>   
      <Title name="Contact Us"/>
      
      <div id="contact" style={{backgroundColor:'#2d2d2d',border:0}}>
      <div className={classes.root}>
        <Map className={classes.map}/>
          <Paper elevation={2} className={classes.content}>
          <List component="nav" aria-label="main mailbox folders" >
          <ListItem >
            <ListItemIcon>
              <HomeIcon className={classes.grey}/>
            </ListItemIcon>
            <ListItemText primary="Address" 
            secondary={<Typography variant="body" className={classes.white}>
              Vasna-Bhaili road, Vadodara,Gujarat</Typography>}/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon className={classes.grey}/>
            </ListItemIcon>
            <ListItemText primary="Phone no." 
            secondary={<Typography variant="body2" className={classes.white}>
              0265-2222222</Typography>}/>
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <MailIcon className={classes.grey} />
            </ListItemIcon>
            <ListItemText primary="Email" 
            secondary={<Typography variant="body2" className={classes.white}>
                uni@nuv.ac.in
            </Typography>}/>
          </ListItem>
          <ListItem  >
            <ListItemIcon>
              <AlternateEmailIcon className={classes.grey}/>
            </ListItemIcon>
            <div style={{display:'flex',flexDirection:'column'}}>
            <ListItemText primary="Socials" /> 
              <div>
                <TwitterIcon/>&ensp;
                <InstagramIcon/>&ensp;
                <FacebookIcon/>&ensp;
                <GitHubIcon/>
              </div>
            </div>
          </ListItem>
          </List>
        </Paper>
      </div>
      <br/><br/><br/>
      </div>
    </div>
   
  );
}



export default Contact;




