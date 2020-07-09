import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageBanner from "../Components/ImageBanner";
import UserInfo from "../Components/UserInfo";
import "../Styles/margin.css";
import Title from "../Components/Title";

const Styles = (theme) => ({
  root: {
    backgroundColor: "#2d2d2d",
    color: "white",
  },
});

class UserHome extends Component {
  UNSAFE_componentWillMount = () => {
    this.page();
  };

  page = (classes, user, loginStatus) => {
    switch (loginStatus) {
      case true:
        return (
          <div id="user" className={classes.root}>
            <ImageBanner username={user["username"]} />
            <UserInfo
              email={user["email"]}
              name={user["name"]}
              phone={user["phone"]}
              department={user["department"]}
            />
          </div>
        );

      case false:
        return <Title name="Can't access page without login or signup." />;
      default:
        return <Title name="Can't access page without login or signup." />;
    }
  };

  render() {
    const { classes, user, loginStatus } = this.props;

    return <>{this.page(classes, user, loginStatus)}</>;
  }
}

export default withStyles(Styles)(UserHome);
