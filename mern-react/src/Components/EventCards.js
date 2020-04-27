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

//declaring styles from material ui to be used with the cards
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 310,
    marginBottom:'24px',
    boxShadow:'1px 1px 3px #17233b'
  },
  media: {
    height: 0,
    paddingTop: '45.25%', // 16:9
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
    backgroundColor:'#13233c',
  },
}));

//declaring and exporting cards. Props declared to make cards dynamic.
export default function EventCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name}
          </Avatar>
        }
        action={
            <div>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton></div>
        }
        title={props.event}
        subheader={props.dateTime}
     
      />
      <CardMedia
        className={classes.media}
        image={require(`../Images/${props.pic}`)}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small" variant="contained" style={{backgroundColor:'#ff6769',color:'white'}}>
          Register now!
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
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
