import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import ImageBanner from '../Components/ImageBanner';
import UserInfo from '../Components/UserInfo';
import '../Styles/margin.css'

const useStyles = makeStyles({
  root: {
    backgroundColor:'#0c0d0e',
    color:'white'
    },
});


function UserHome(props) {
  const classes = useStyles();
    return (
        <div id="user" className={classes.root}>     
          <ImageBanner username={props.user['username']}/>
          <UserInfo 
          email={props.user['email']} 
          name={props.user['name']}
          phone= {props.user['phone']}
          department = {props.user['department']}
          />
        </div>
      );
    }
    

export default UserHome;
