import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../Containers/Home'
import Login from '../Containers/Login'
import SignUp from '../Containers/SignUp'
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HelpIcon from '@material-ui/icons/Help';

const drawerWidth = 210;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'white',
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        
          <ListItem key="Events" component={Link} to="/events">
            <ListItemIcon>
            <EventAvailableIcon/>
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem key="Clubs" component={Link} to="/clubs">
            <ListItemIcon>
            <GroupAddIcon/>
            </ListItemIcon>
            <ListItemText primary="Clubs" />
          </ListItem>
          <ListItem key="Resources" component={Link} to="/resources">
            <ListItemIcon>
            <FileCopyIcon/>
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem key="Blog" component={Link} to="/blog">
            <ListItemIcon>
            <LibraryBooksIcon/>
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>
          <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>
          <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>
          <ListItem/>  <ListItem/>  <ListItem/>  <ListItem/>
          <Divider/>
          <ListItem key="Help" component={Link} to="/help">
            <ListItemIcon>
            <HelpIcon/>
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <BrowserRouter>
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component={Link} to="/">
              Cluster
            </Typography>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
          
          </Toolbar>
      </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/Starred" render={() => <div>Page starred</div>} />
            {/* <Route path="/login" component={Login} /> */}
            
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
