import React from "react";
import Grid from "@material-ui/core/Grid";
import ClubCard from "../Components/ClubCards";
import Title from "../Components/Title";
import '../Styles/margin.css'

function Club(props) {
  return (
    <div style={{backgroundColor:"#2d2d2d"}}>
      <Title name="Clubs" />
      <div id="clubs">
      <Grid container  
      style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'
      }}>
        <Grid item md={5} xs={11}>
          <ClubCard
            name="Developer Students Club"
            title="Developer Students Club"
            desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description."
            img="carousel-three.jpg"
            onRouteChange={props.onRouteChange}
          />
        </Grid>
        <Grid item  md={5} xs={11}>
          <ClubCard
            name="Mozilla Firefox Campus Club"
            title="Mozilla Firefox Campus Club"
            desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description."
            img="carousel-two.jpg"
            onRouteChange={props.onRouteChange}
          />
        </Grid>
        </Grid>
        <Grid container  
      style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'
      }}>
        <Grid item  md={5} xs={11}>
          <ClubCard
            name="Microsoft student partners"
            title="Microsoft student partners"
            desc="Club description.Club description.
            Club description. Club description. Club desciption.
            Club description.Club description.
            Club description. Club description. Club desciption.
            Club description."
            img="carousel-one.jpg"
            onRouteChange={props.onRouteChange}
          />
        </Grid>
        <Grid item  md={5} xs={11}>
          <ClubCard
            name="ACM Club"
            title="ACM Club"
            desc="Club description.Club description.
            Club description. Club description. Club desciption.
            Club description.Club description.
            Club description. Club description. Club desciption.
            Club description."
            img="carousel-two.jpg"
            onRouteChange={props.onRouteChange}
          />
        </Grid>
      </Grid>
    </div><br/><br/>
    </div>
  );
}

export default Club;
