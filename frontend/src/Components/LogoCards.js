import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//declaring styles from material ui to be used by card
const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 230,
    marginTop:'40px',
    border:0,
    boxShadow:'none',
    backgroundColor:"#2d2d2d",
    color:"white",
  
  },
  media: {
    paddingTop:0,
    marginTop:0,
    height: 'auto',
  },
  img:{
    height:'120px',
    width:'120px',
    alignSelf:'center',
  },
  content_card:{
    textAlign:'center',
  },
  btn_1: {
    backgroundColor: "#e84a5f",
    marginRight: "10px",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#2d2d2d",
      color: "#e84a5f",
      boxShadow: "none",
    },

  }
}));

//declaring and exporting function cards
//declaring props to dynamically change data of cards.
const LogoCard=(props)=> {
  const classes = useStyles();

  return (

    <Card className={classes.root} >
      <div style={{ display:'flex', justifyContent:'center',alignItems:'center' }}>
        <CardMedia
          className={`${classes.media} ${classes.img}`}
          image={require(`../Images/${props.img}`)}
          title={props.name}
      /></div>
        <CardContent className={classes.content_card}>
          <Typography variant="h5" component="h2" style={{color:'#fff'}}>
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:'#bfbfbf'}}>
            {props.desc}
          </Typography>
        </CardContent>
     <div style={{ display:'flex', justifyContent:'center' }}>
      <CardActions>
      
        <Button size="small" variant="contained" 
        className={classes.btn_1}
        onClick={() => {
          props.onRouteChange("clubs");
        }}>
          Join
        </Button>
        
      </CardActions></div>
    </Card>
 
  );
}

export default LogoCard;