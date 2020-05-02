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
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Home from '../Containers/Home'
import Login from '../Containers/Login'
import SignUp from '../Containers/SignUp'
import Events from '../Containers/Events'
import Clubs from '../Containers/Clubs'
import Contact from '../Containers/Contact'
import Resources from '../Containers/Resources'
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import HelpIcon from '@material-ui/icons/Help';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import "../Styles/Navbar.css"

//Drawer width
const drawerWidth = 190;

//Style component
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    zIndex:10,
    height:'90vh'
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width:'100%'
      // width: `calc(100% - ${drawerWidth}px)`
    },
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },

  toolbar:{
    [theme.mixins.toolbar]:{
      marginBottom:0,
    }
  
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor:'white',
    paddingTop:'49px',
  },
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  logoHide:{
    display:'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingRight:'10px'
    },
  }
}));

//Making drawer responsive
function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  //Defining data of drawer component
  const drawer = (
    <div>
      <div className={`${classes.toolbar} top-nav`} >
      <img src={require('../Images/Logo.png')} style={{height:'57px',
      position: 'relative', 
      left: '32%',
      bottom:'15%',
      }} alt="logo" />
     </div>
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
          <ListItem key="Contact" component={Link} to="/contact">
            <ListItemIcon>
            <AlternateEmailIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <Divider style={{marginTop:"30px"}}/>
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
      {/*Adding BrowserRouter from React-router to navigate between link paths */}
      <BrowserRouter>     
      {/* Displaying top-nav bar */}
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="top-nav">
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
            <img src={require('../Images/Logo.png')} style={{height:'45px'}} alt="logo" className={classes.logoHide}/>
            </Link>
            <Typography variant="h5" align="center" noWrap component={Link} to="/" className="title"
            style={{fontWeight:'bold'}} >
              CLUSTER
            </Typography>
            <div className={classes.toolbarButtons}>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
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
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* Helps in display on larger screens like laptop and tablets */}
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
        {/* Main content that is display */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* Specifying switch from React-router to render the linked component */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/events" component={Events}/>
            <Route path="/clubs" component={Clubs}/>
            <Route path="/resources" component={Resources}/>            
            <Route path="/contact" component={Contact}/>
            
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );}


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

