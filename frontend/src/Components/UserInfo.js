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
    backgroundColor:'#2d2d2d',
    color:'white'
  },
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
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
    color:'#bfbfbf',
    fontSize:"20px",
    marginTop:"10px",
    [theme.breakpoints.down("sm")]: {
        marginTop:'10px'
      }
  },
  text:{
    fontSize:"16px",
    marginTop:"10px",
    [theme.breakpoints.down("sm")]: {
        marginTop:'10px'
      }
  },
  club:{
    marginTop:'10px',
    fontSize:"18px",
    fontWeight:"400",
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
  },
  club_info:{
    textAlign:"left",
    [theme.breakpoints.down("sm")]: {
      textAlign:'center'
    }
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
            style={{backgroundColor:'#131313',width:"2px",marginRight:40}}/>

        <div className={classes.club_info}>
            <Typography className={`${classes.title}`}>Clubs joined:</Typography>
            <Typography className={classes.club}>Developer Students Club</Typography>
            <Typography variant="body2">Organizer</Typography>
            <Typography className={classes.club}>Mozilla club</Typography>
            <Typography variant="body2">Designer</Typography>
        </div>
      </div>
      <br/><br/>
        <Divider variant="middle"
         style={{backgroundColor:'#4e4e4e'}}/>
        <br/><br/>
       <Typography variant="h5">Registered events</Typography>
       <RegisteredEvents/>
    </Card>
  );
}
