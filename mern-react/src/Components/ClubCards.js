import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop:'40px',
    border:'1px solid black',
    boxShadow:'none',
    "&:hover": {
      backgroundColor: "white"
    }
  },
  media: {
    paddingTop:0,
    marginTop:0,
    height: 'auto',
  
  },
  img:{
    height:'120px',
    width:'400px',
    alignSelf:'center',
  },
  content_card:{
    textAlign:'center',
  }
});

const LogoCard=(props)=> {
  const classes = useStyles();

  return (

    <Card className={classes.root} >
      <div style={{ display:'flex', justifyContent:'space-evenly' }}>
        <CardMedia
          className={classes.media,classes.img}
          image={require(`../Images/${props.img}`)}
          title={props.name}
      />
        <CardContent className={classes.content_card}>
          <Typography variant="h5" component="h2" >
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:'#253859'}}>
            {props.desc}
            
          </Typography>
        </CardContent></div>
     <div style={{ display:'flex', justifyContent:'center' }}>
      <CardActions>
      
        <Button size="small" variant="contained" style={{backgroundColor:'#ff6769',color:'white'}}>
          Join
        </Button>
        
      </CardActions></div>
    </Card>
 
  );
}

export default LogoCard;