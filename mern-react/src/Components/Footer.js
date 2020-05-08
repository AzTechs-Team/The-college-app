// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// //declaring styles from material ui to be used with the footer
// const useStyles  = makeStyles((theme) => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit ,
//     paddingBottom: theme.spacing.unit ,
//     marginBottom:0,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     marginTop: theme.spacing.unit * 3,
//     marginBottom:0,
//     padding: `${theme.spacing.unit * 6}px 0`,
//     paddingBottom:0
//   }
// }));

// //declaring and exporting the function Footer
// function Footer() {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       <Paper className={classes.root} elevation={1}>
//         <Typography component="p" align="center">
//         React App with Material UI<br/>
//           @2020 All right reserved
//         </Typography>
//       </Paper>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { palette } from "@material-ui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
