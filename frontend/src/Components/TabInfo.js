import React from  'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight:'30px',
    marginLeft:'30px',
    display:'flex',
    flexDirection:'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
   
  },
  panel:{
    boxShadow:'1px 1px 4px #000',
    padding:'10px',
  },
  media: {
    marginTop:'10px',
    height: 250,
    width:220,
    marginRight:'27px'
  },
  note_img:{
    display:'flex',
    flexDirection:'row',
      [theme.breakpoints.down("sm")]:{
        flexDirection:'column',
  }
  }
}));


export default function TabInfo(props){
  const classes = useStyles();
    return(
        <div>
        <br/>
        <Typography variant="h4" align="center">{props.topic}</Typography>
        <br/>
        <Typography variant="p">
            {props.intro}
        </Typography><br/><br/>
        <Typography variant="h5">Course outline</Typography>
            <List component="nav" aria-label="main mailbox folders">
            {props.course.map((i) => (
            <ListItem >
              <ListItemText primary={<Typography variant="body1" >{i[0]}</Typography>}
              secondary={<Typography variant="body2" style={{color:'#bfbfbf'}} >
                {i[1]}</Typography>}
              />
            </ListItem>
            ))}
          </List>
          <br/>
      <Typography variant="h5">Notes</Typography>
      <div className={classes.note_img}>
      {props.img.map((i) => (
      <Link to={`/notes/${i[1]}`} target="_blank" download>
      <CardMedia
        className={classes.media}
        image={require(`../Images/${i[0]}`)}
        title={i[2]}
      />
      </Link>
      ))}
      </div>
      </div>
    )
}