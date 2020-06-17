import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//declaring styles
const styles = theme => ({
  root: {
    "& .MuiPaper-root":{
      backgroundColor:'#2d2d2d',
    },
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(6),
    marginTop:40,
    marginBottom:0,
    paddingBottom:23,
    backgroundColor:'#2d2d2d',
    color:'white',
    
  },
  title:{
    marginLeft:190,
  [theme.breakpoints.down("xs")]: {
    marginLeft:0,
    "& .Title-root":{
      backgroundColor:'#2d2d2d'
    }
  }}
});

//decalring function
//declaring props to change data of title based on requirement.
function Title(props) {
  const { classes } = props;

  return (
      <div className={classes.title}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h4" align="center">
        {props.name}
        </Typography>
      </Paper>
      </div>
  );
}

//exporting function.
export default withStyles(styles)(Title);