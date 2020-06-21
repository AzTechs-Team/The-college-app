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
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


//Drawer width
const drawerWidth = 190;

//Style component
const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    "& .MuiPaper-root":{
      backgroundColor:"#1d1d1d",
      boxShadow:'3px 3px 8px #000'
    },
    backgroundColor:'#2d2d2d',
  }
  ,
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 10,
    height: "auto",
    border: 0,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      // width: `calc(100% - ${drawerWidth}px)`
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: {
    backgroundColor: "#131313",
    [theme.mixins.toolbar]: {
      marginBottom: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbarButtons: {
    marginLeft: "auto",
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      marginRight:theme.spacing(-2),
    },
  },
  logoHide: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      paddingRight: "10px",
    },
  },
  btn_1: {
    backgroundColor: "#e84a5f",
    marginRight: "10px",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#131313",
      color: "#e84a5f",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding:"3px 11px",
    },

  },
  hide: {
    display: "none",
  },
  sidebar: {
    backgroundColor: "#1d1d1d",
    height: "100vh",
  },
  tabs_tabs: {
    color: "white",
    "&:hover":{
      backgroundColor:'#4e4e4e',
    }
  },
}));

//Making drawer responsive
function Navbar(props) {
  const { container, onRouteChange, loginStatus, loggedIn } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Defining data of drawer component
  const drawer = (
    <div className={classes.sidebar}>
      <div className={`${classes.toolbar}`}>
        <img
          src={require("../Images/Logo.png")}
          style={{
            height: "57px",
            position: "relative",
            left: "32%",
            bottom: "15%",
          }}
          alt="logo"
        />
      </div>
      <Divider />
      <List>
        <ListItem
          key="User Profile"
          component={Link}
          to="/user"
          className={loginStatus ? classes.tabs_tabs : classes.hide}
          onClick={() => {
            onRouteChange("user");
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon className={classes.tabs_tabs} />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
        <ListItem
          key="Events"
          component={Link}
          to="/events"
          className={classes.tabs_tabs}
          onClick={() => {
            onRouteChange("events");
          }}
        >
          <ListItemIcon>
            <EventAvailableIcon className={classes.tabs_tabs} />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem
          key="Clubs"
          component={Link}
          to="/clubs"
          className={classes.tabs_tabs}
          onClick={() => {
            onRouteChange("clubs");
          }}
        >
          <ListItemIcon>
            <GroupAddIcon className={classes.tabs_tabs} />
          </ListItemIcon>
          <ListItemText primary="Clubs" className={classes.tabs_tabs} />
        </ListItem>
        <ListItem
          key="Resources"
          component={Link}
          to="/resources"
          className={loginStatus ? classes.tabs_tabs : classes.hide}
          onClick={() => {
            onRouteChange("resources");
          }}
        >
          <ListItemIcon>
            <FileCopyIcon className={classes.tabs_tabs} />
          </ListItemIcon>
          <ListItemText primary="Resources" className={classes.tabs_tabs} />
        </ListItem>
        <ListItem
          key="Contact"
          component={Link}
          to="/contact"
          className={classes.tabs_tabs}
          onClick={() => {
            onRouteChange("contact");
          }}
        >
          <ListItemIcon>
            <AlternateEmailIcon className={classes.tabs_tabs} />
          </ListItemIcon>
          <ListItemText primary="Contact" className={classes.tabs_tabs} />
        </ListItem>
        <Divider style={{ marginTop: "30px" }} />
        
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        {/*Adding BrowserRouter from React-router to navigate between link paths */}

        {/* Displaying top-nav bar */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img
                src={require("../Images/Logo.png")}
                style={{ height: "45px" }}
                alt="logo"
                className={classes.logoHide}
                component={Link}
                to="/"
                onClick={() => {
                  onRouteChange("home");
                }}
              />
            </Link>
            <Typography
              variant="h5"
              align="center"
              noWrap
              component={Link}
              to="/"
              style={{ fontWeight: "400",color:'white',textDecoration:'none',textAlign:'center' }}
              onClick={() => {
                onRouteChange("home");
              }}
            >
              CLUSTER
            </Typography>
            <div className={classes.toolbarButtons}>
              <Button
                variant="contained"
                className={loginStatus ? classes.hide : classes.btn_1}
                onClick={() => {
                  onRouteChange("login");
                }}
                component={Link}
                to="/login"
              >
                Log in
              </Button>
              <Button
                variant="contained"
                className={loginStatus ? classes.hide : classes.btn_1}
                component={Link}
                to="/signup"
                onClick={() => {
                  onRouteChange("signup");
                }}
              >
                Sign up
              </Button>
              <Button
                variant="contained"
                className={loginStatus ? classes.btn_1 : classes.hide}
                component={Link}
                to="/home"
                onClick={() => {
                  onRouteChange("home");
                  loggedIn(false);
                }}
              >
                Sign out
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          {/* Helps in responsive design on mobile devices */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* Helps in display on larger screens like laptop and tablets */}
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Navbar;
