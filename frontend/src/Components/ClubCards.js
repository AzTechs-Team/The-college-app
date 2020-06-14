import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  large:{
    width: 350,
     height: "auto",
     marginBottom:20
  },
  small:{
    width:260,
    height:"auto",
    marginBottom:40,
    textAlign:"center"
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
      textDecoration:'none',
    },
    [theme.breakpoints.down("sm")]: {
      padding:"2px 8px",
    },
  },
    hr:{
      marginTop:0,
      height:'4px',
      backgroundColor:'white',
      width:'60%'
    },
    h1:{
      textAlign:'center',
      color:'white'
    },
    back:{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      color:'white',
      height:"inherit",
      boxShadow:"none",
      border:0,
    }
}));

const ClubCard=(props)=>{
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const {name,img,desc,title,onRouteChange} = props
    return(
    <div>
    <Flippy
    flipOnHover={matches}
    flipOnClick={!matches}
    flipDirection="horizontal" 
    className={matches?classes.large:classes.small}
    >
        <FrontSide style={{
        backgroundImage:` url(${require(`../Images/${img}`)})`,backgroundSize:'cover',
        boxShadow:"2px 2px 8px #000"}}>
        <br/><br/><br/>
        <div style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <hr className={classes.hr}/>
            <h1 className={classes.h1}>{title}</h1>
            <hr className={classes.hr}/>
        </div>
        </FrontSide>
        <BackSide
        className={classes.back}>
            <Typography variant="h5">{name}</Typography><br/>
             <Typography variant="body2" 
             align="center">
            {desc}
           
            </Typography>
            <br/>

          <div style={{ display:'flex',justifyContent:'center',flexDirection:'row'}}>
          <Link 
        href="https://www.google.com/forms/about/" 
        target="_blank" 
        rel="noopener"
        style={{textDecoration:'none'}}
        >
          <Button size="small" variant="contained" 
          className={classes.btn_1}
        >
          Join Club!
        </Button></Link>&ensp;
          <Button size="small" variant="contained" 
          className={classes.btn_1}
        component={Link} to='/events'
        onClick={()=>{
          onRouteChange("events");
        }} >
          Checkout events!
        </Button>
        </div>
        </BackSide>
    </Flippy><br/>
    {!matches?<div><br/></div>:null}
    </div>
        )
    }


export default ClubCard;