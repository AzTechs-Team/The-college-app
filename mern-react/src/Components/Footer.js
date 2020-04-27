import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//declaring styles from material ui to be used with the footer
const useStyles  = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit ,
    paddingBottom: theme.spacing.unit ,
    marginBottom:0,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 3,
    marginBottom:0,
    padding: `${theme.spacing.unit * 6}px 0`,
    paddingBottom:0
  }
}));

//declaring and exporting the function Footer
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography component="p" align="center">
        React App with Material UI<br/>
          @2020 All right reserved
        </Typography>
      </Paper>
    </footer>
  );
}

export default Footer;