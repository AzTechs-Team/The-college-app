import React from 'react';
import Grid from '@material-ui/core/Grid'
import ClubCard from '../Components/ClubCards'
import Footer from '../Components/Footer'
import Title from '../Components/Title'
import { Typography } from '@material-ui/core';


function Clubs() {
  return (
    <div>        

      <Title name="Clubs"/>
      <Grid container  style={{display:'flex',justifyContent:'space-evenly'}}>
        <Grid item  >
          <ClubCard 
          club="Developer Student Club"
          img="dsc.png"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."/>
        </Grid>
        <Grid item  >
          <ClubCard 
          club="Developer Student Club"
          img="dsc.png"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."/>
        </Grid>
       
        
      </Grid>
      
      <Footer/>
    </div>
   
  );
}



export default Clubs;




