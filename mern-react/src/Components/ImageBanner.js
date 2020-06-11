import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: "100%",
    display:'flex',
    justifyContent:'center',
    marginBottom:90,
    },
  media: {
    position:"relative",
    width:"100vw",
    height: 320,
    backgroundSize:"cover",
    boxShadow:"2px 2px 6px #000"
  },
  large: {
    position:'absolute',
    top:200,
    left:'auto',
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin:0,
    padding:0,
    boxShadow:"2px 2px 8px #000",

  },
  info:{
      margin:"auto 5%",
      backgroundColor:'#0c0d0e'
  },
  btn_1: {
    backgroundColor: "#e84a5f",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#0c0d0e",
      color: "#e84a5f",
      boxShadow: "none",
    },
}
}));

export default function ImageBanner(props) {
  const classes = useStyles();
  const {username} = props;
  return (
    <div >
        <div className={classes.banner}>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={require(`../Images/banner1.jpg`)}
                />
            <Avatar alt="Remy Sharp" src={require(`../Images/user1.jpg`)} className={classes.large} />
            </Card>
            <Typography variant="h5" align="center"
            style={{marginTop:17,color:"#8694ad"}}>
                {username}
            </Typography>
            <Typography variant="body1" align="center" className={classes.info}>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </Typography>
            <div style={{display:'flex',justifyContent:'center',marginTop:23,marginBottom:15}}>
            <Button variant="contained" 
            className={classes.btn_1}>
                Edit profile
            </Button>
            </div>
        </div>

    </div>
  );
}
