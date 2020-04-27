import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

//Styling the about component using styles from material ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: '100%',
      height: 'auto',
      backgroundColor: '#D9D4F0',
      padding:'30px 50px',
      textAlign:'center'
    },
    
  },
}));

//declaring and exporting function "about"
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
      <Typography varient="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales
       odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet 
       porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra 
       sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae
        risus non diam auctor lobortis id eu mauris. Pellentesque commodo urna quis
         neque luctus ultricies. Mauris pretium posuere orci, id tincidunt ante 
         tincidunt in.
      </Typography><br/>
      <Button size="small" variant="contained" style={{backgroundColor:'#17233b',color:'white'}}>
          Signup now!
        </Button>
      </Paper>
    </div>
  );
}