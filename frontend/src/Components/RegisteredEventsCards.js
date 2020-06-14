import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


//declaring styles from material ui to be used by card
const useStyles = makeStyles({
  root: {
    minWidth: 240,
    marginTop:'40px',
    border:".5px solid #181818",
    "&:hover": {
      backgroundColor: "#4d4d4d"
    },
    marginRight:12,
    backgroundColor:"#4e4e4e",
    color:'white'
  },
  img:{
    height:150,
    width:240,
    alignSelf:'center',
  },
  content_card:{
    textAlign:'center',
  }
});

//declaring and exporting function cards
//declaring props to dynamically change data of cards.
const RegisteredEventsCard=(props)=> {
  const classes = useStyles();

  return (

    <Card className={classes.root} >
      <div style={{ display:'flex', justifyContent:'center' }}>
        <CardMedia
          className={` ${classes.img}`}
          image={require(`../Images/${props.img}.jpg`)}
      /></div>
        <CardContent className={classes.content_card}>
          <Typography variant="h5" component="h2" style={{color:'white'}} >
            {props.name}
          </Typography>
          <Typography variant="body2" component="p" style={{color:'#bfbfbf'}}>
            {props.date}<br/>{props.time}<br/>{props.place}
            
          </Typography>
        </CardContent>
    </Card>
 
  );
}

export default RegisteredEventsCard;