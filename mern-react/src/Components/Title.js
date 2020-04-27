import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//declaring styles
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit *2,
    paddingBottom: theme.spacing.unit *2,
    marginTop:40,
    marginBottom:27,
  },
});

//decalring function
//declaring props to change data of title based on requirement.
function Title(props) {
  const { classes } = props;

  return (

      <Paper className={classes.root} elevation={0}>
        <Typography variant="h4" align="center">
        {props.name}
        </Typography>
      </Paper>
  
  );
}

//exporting function.
export default withStyles(styles)(Title);