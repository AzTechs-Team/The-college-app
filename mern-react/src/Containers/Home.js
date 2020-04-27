import React from 'react';
import Carousel from '../Components/Carousel';
import LogoCard from '../Components/LogoCards';
import Grid from '@material-ui/core/Grid'
import About from '../Components/About'
import Recent from '../Components/Recent';
import Footer from '../Components/Footer'
import { Typography } from '@material-ui/core';

//declare Component home, to be rendered inside conent of Navbar component
function Home() {
  return (
    <div > 
      {/* display Carousel        */}
      <Carousel/>

       {/* Used grid component of material ui to align cards and make it responsive */}
      <Grid container  style={{display:'flex',justifyContent:'space-evenly'}}>
        <Grid item >
          <LogoCard img='dsc.png' 
          name="Developer Students Club" 
          desc="Club description.Club description.
          Club description. Club description. Club desciption."/>
        </Grid>
        <Grid item >
          <LogoCard img='mozilla.png' 
          name="Mozilla Firefox Campus Club" 
          desc="Club description.Club description.
          Club description. Club description. Club desciption."/>
        </Grid>
        <Grid item >
          <LogoCard img='microsoft.png' 
          name="Microsoft Student Partners" 
          desc="Club description.Club description.
          Club description. Club description. Club desciption."/>
        </Grid>
      </Grid><br/>

      {/* display About section */}
      <About/>
      <br/><br/>  
      
      {/* display Recent section */}
      <Typography variant="h5" align="center">Recent updates</Typography><br/>
      <Recent/>

      {/* display footer */}
      <Footer/>
    </div>

  );
}



export default Home;




