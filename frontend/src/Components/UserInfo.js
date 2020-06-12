import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import RegisteredEvents from './RegisteredEvents';

const useStyles = makeStyles((theme) =>({
  root: {
    textAlign:'center',
    marginTop:40,
    backgroundColor:'#0c0d0e',
    color:'white'
  },
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    [theme.breakpoints.down("sm")]: {
        flexDirection:'column'
      },
    
  },
  row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
        justifyContent:'center',
      }
  },
  title:{
    fontSize:"20px",
    marginTop:"10px",
    [theme.breakpoints.down("sm")]: {
        marginTop:'12px'
      }
  },
  text:{
    fontSize:"16px",
    marginTop:"10px",
    [theme.breakpoints.down("sm")]: {
        marginTop:'12px'
      }
  },
  club:{
    marginTop:'10px',
    fontSize:"18px",
    fontWeight:"bold",

  },
  media:{
    width:300,
    height: 170,
  },
  events:{
      marginTop:'30px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      textAlign:'left',
      border:0,
      boxShadow:'none'
  }
}));

export default function UserInfo(props) {
  const classes = useStyles();
  const {email,name,phone,department} = props;
  return (
    <Card className={classes.root}>
        <br/>
      <Typography variant="h5">Personal Details</Typography>
      <br/>
      <div className={classes.container}>
        <div>
            <div className={classes.row}>
            <br/><br/>
            <Typography className={classes.title}>Name:</Typography>
            &nbsp;&nbsp;
            <Typography className={classes.text}>{name}</Typography>
            </div>
            <div className={classes.row}>
                <Typography className={classes.title}>Email:</Typography>
                &nbsp;&nbsp;
                <Typography className={classes.text}>{email}</Typography>
            </div>
            <div className={classes.row}>
                <Typography className={classes.title}>Phone:</Typography>
                &nbsp;&nbsp;
                <Typography className={classes.text}>{phone}</Typography>
            </div>
            <div className={classes.row}>
                <Typography className={classes.title}>Department:</Typography>
                &nbsp;&nbsp;
                <Typography className={classes.text}>{department}</Typography>
            </div>
            <br/>
            
        </div>
            <Divider orientation="vertical" flexItem={true}
            style={{marginLeft:-50,backgroundColor:'#6b778d'}}/>

        <div>
            <Typography className={`${classes.club} ,${classes.title}`}>Clubs joined:</Typography>
            <Typography className={classes.club}>Developer Students Club</Typography>
            <Typography className={classes.text}>Organizer</Typography>
            <Typography className={classes.club}>Mozilla club</Typography>
            <Typography className={classes.text}>Designer</Typography>
        </div>
      </div>
      <br/><br/>
        <Divider variant="middle"
         style={{backgroundColor:'#6b778d'}}/>
        <br/><br/>
       <Typography variant="h5">Registered events</Typography>
       <RegisteredEvents/>
    </Card>
  );
}
