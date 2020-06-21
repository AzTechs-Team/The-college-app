import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';

//declaring styles from material ui to be used with the cards
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    marginBottom:'24px',
    boxShadow:'1px 1px 3px #17233b',
    backgroundColor: '#4e4e4e',
    color:'white',
    "&:hover":{
      backgroundColor:'#3f3f3f',
    }
  },
  media: {
    height: 0,
    paddingTop: '45.25%', // 16:9
  },
  datetime:{
      color:'white'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'#4e4e4e',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  link:{
    '&:hover':{
      textDecoration:'none'
    }
  },
  red:{
    color:"#e84a5f"
  },
  btn_1: {
    backgroundColor: "#e84a5f",
    marginRight: "10px",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#3f3f3f",
      color: "#e84a5f",
      boxShadow: "none",
    },}
}));

//declaring and exporting cards. Props declared to make cards dynamic.
export default function EventCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggle = () =>{
    setToggled(!toggled);
  }
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.datetime}
        avatar={
          <Avatar  className={classes.avatar} src={require(`../Images/${props.logo}`)}>
            {props.name}
          </Avatar>
        }
        action={
            <div>
            <IconButton aria-label="add to favorites" 
            onClick={handleToggle}>
            <FavoriteIcon className={toggled?classes.red:null} />
          </IconButton>
          <Link 
            href="https://www.google.com/forms/about/" 
            target="_blank" 
            rel="noopener">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </Link></div>
        }
        title={<Typography variant="h6" >{props.event}</Typography>}
        subheader={<Typography variant="body2" style={{color:'white'}}>
          {props.dateTime}</Typography>}
      />
      <CardMedia
        className={classes.media}
        image={require(`../Images/${props.pic}`)}
      />
      <CardContent >
        <Typography variant="body2"  component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Link 
        href="https://www.google.com/forms/about/" 
        target="_blank" 
        rel="noopener"
        className={classes.link}>
        <Button size="small" variant="contained" 
        className={classes.btn_1}>
            Register now!
          </Button>
        </Link>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{color:"white"}}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Event organizers:</Typography>
          <Typography paragraph>
            Event description
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
