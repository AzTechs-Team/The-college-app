import React, { Component } from "react";
import Title from "../Components/Title";
import About from "../Components/About";
import ResourceTabs from "../Components/ResourceTabs";
import { Typography } from "@material-ui/core";
import "../Styles/margin.css";

class Resources extends Component {
  UNSAFE_componentWillMount = () => {
    this.page();
  };

  page = (loginStatus) => {
    switch (loginStatus) {
      case true:
        return (
          <div style={{ backgroundColor: "#2d2d2d", color: "white" }}>
            <Title name="Resources" />
            <div id="about">
              <About
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales
              odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet 
              porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra 
              sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae
              risus non diam auctor lobortis id eu mauris."
                btn="Check out Workshops!"
                location="events"
              />
              <br />
              <br />
            </div>
            <div id="resources">
              <Typography variant="h6" align="center">
                Check out notes of various subjects along with previous papers
                to help you study better!!
              </Typography>
              <br />
              <ResourceTabs />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        );

      case false:
        return <Title name="Can't access page without login or signup." />;
      default:
        return <Title name="Can't access page without login or signup." />;
    }
  };

  render() {
    const { loginStatus } = this.props;
    return <>{this.page(loginStatus)}</>;
  }
}

export default Resources;
