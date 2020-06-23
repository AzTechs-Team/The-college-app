import React from "react";
import Carousel from "../Components/Carousel";
import LogoCard from "../Components/LogoCards";
import Grid from "@material-ui/core/Grid";
import About from "../Components/About";
import Recent from "../Components/Recent";
import { Typography } from "@material-ui/core";
import '../Styles/margin.css'

//declare Component home, to be rendered inside conent of Navbar component
function Home(props) {
  return (
    <div id="home" style={{color:"white",backgroundColor:'#2d2d2d'}}>
      <div id="overlay">
        {/* display Carousel*/}
      <Carousel />

{/* Used grid component of material ui to align cards and make it responsive */}
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid item>
            <LogoCard
              img="dsc.png"
              name="Developer Students Club"
              desc="Club description.Club description.Club description.
            Club description. Club description. Club desciption."
            onRouteChange={props.onRouteChange}
            />
          </Grid>
          <Grid item>
            <LogoCard
              img="mozilla.png"
              name="Mozilla Firefox Campus Club"
              desc="Club description.Club description.Club description.
            Club description. Club description. Club desciption."
            onRouteChange={props.onRouteChange}
            />
          </Grid>
          <Grid item>
            <LogoCard
              img="microsoft.png"
              name="Microsoft Student Partners"
              desc="Club description.Club description.Club description.
            Club description. Club description. Club desciption."
            onRouteChange={props.onRouteChange}
            />
          </Grid>
        </Grid>
        <br />

        {/* display About section */}
        <About
          desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales
        odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet 
        porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra 
        sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae
        risus non diam auctor lobortis id eu mauris. Pellentesque commodo urna quis
          neque luctus ultricies. Mauris pretium posuere orci, id tincidunt ante 
          tincidunt in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales
          odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet 
          porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra 
          sollicitudin."
          btn="Checkout Events now!"
          onRouteChange={props.onRouteChange}
          location="events"
        />
        <br />

        {/* display Recent section */}
        <Typography variant="h5" align="center" style={{color:'white'}}>
          Recently updated
        </Typography>
        <br />
        <Recent onRouteChange={props.onRouteChange}/>
        <br/><br/>
        {/* display footer */}
      </div>
      
    </div>
  );
}

export default Home;
