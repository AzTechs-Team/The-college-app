import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabInfo from './TabInfo';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight:'30px',
    marginLeft:'30px',
    display:'flex',
    flexDirection:'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  //   [theme.breakpoints.down("sm")]:{
  //     overflow:'hidden',
  //     width:'auto'
  // }
  },
  panel:{
    boxShadow:'1px 1px 4px #000',
    padding:'10px',
  },
  media: {
    marginTop:'10px',
    height: 230,
    width:200,
    paddingTop: '3%', // 16:9
  },
}));

export default function ResourceTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{zIndex:0}} >
        <Tabs value={value} onChange={handleChange} 
        aria-label="simple tabs example" centered>
          <Tab label="ICS" {...a11yProps(0)} />
          <Tab label="GUI" {...a11yProps(1)} />
          <Tab label="LAC" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0} className={classes.panel}>
        <TabInfo 
        topic="Introduction to Computer Science"
        intro="This course introduces computer concepts including fundamental functions and operations of the computer.
        Topics include basic introduction to Operating systems, Data structures, Database and computer networks
        and internet. Upon completion, students should be able to demonstrate an understanding of the role and
        function of computers and use the computer to solve problems."
        course={[["Basics Of Computer And Data Processing",
        "An Overview of the Computer System, Levels of Computer language, Program language translator, Software: Types of Software,Computer virus, How to deal with virus. How Computers Represent Data. Number System"],
        ["The Operating System And Data Structures",
        "Operating Systems and Basics: Overview of Operating System, The user interface, Operating system services, Operating system Functions,Types of operating system,Introduction to Data Structure."],
        ["Introduction To Database",
        " Data, information, Database, Types of database, Database Management System, Introduction to Relational Database management system"]]}
        img={[["notes1.png","operating_system.pdf","Os notes"],
        ["notes2.png","data_structure.pdf","Ds notes"]]}
        />
      </TabPanel>

      <TabPanel value={value} index={1} className={classes.panel}>
      <TabInfo 
        topic="Graphical User Interface"
        intro=" This course is an introduction to web design and development of website in the information fields. It is designed to provide understanding of basic web development
        concepts and process, web design best practices, web page creation"
        course={[["Introduction to Web",
        "Introduction and Web Development Strategies, History of Web and Internet, Protocols governing Web, Connecting to Internet,Introduction to basic Internet services and tools"],
        ["Domain registration and web hosting",
        " Domain Registration,Shared Hosting: Linux Hosting, Windows Hosting, Reseller Hosting,Specialized Hosting: WordPress Hosting, CMS Hosting, Ecommerce Hosting."],
        ["Web page designing",
        "HTML:HTML elements, Attributes, HTML list, table, images, frames, iframe ,forms, classes, ID, links."]]}
        img={[["notes3.png","html_basics.pdf","Html basics"],
        ["notes2.png","lists_tables.pdf","Lists and tables"]]}
        />
      </TabPanel>


      <TabPanel value={value} index={2} className={classes.panel}>
      <TabInfo 
        topic="Linear Algebra and Calculus"
        intro="This is the engineering mathematics basic course. It deals with fundamental
        concepts of maths like calculus. Partial derivatives and matrices are covered in this course."
        course={[["Partial Derivatives",
        "Chain rule, Scalar point function,Vector point function, direction derivative,gradient vector,tangent plane, normal line,total differential,maxima and minima."],
        ["Vector Calculus",
        "Derivative of vector function,velocity of a particle,divergence,physical significance of divergence,gradient,physical significance of gradient,irrotational vectors,solenoidal vectors"],
        ["Matrices",
        " introduction,matrix multiplication,gauss divergence theorem,gauss elemination method, rank-nullity theorem,eigen values,eigen vectos"]]}
        img={[["notes4.png","vector_calculus.pdf","Vector calculus"]]}
        />
      </TabPanel>
    </div>
  );
}
