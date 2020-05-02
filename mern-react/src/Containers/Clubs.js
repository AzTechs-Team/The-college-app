import React from 'react';
import Grid from '@material-ui/core/Grid'
import ClubCard from '../Components/ClubCards'
import Footer from '../Components/Footer'
import Title from '../Components/Title'



function Club() {
  return (
    <div>        

      <Title name="Clubs"/>
 
      <Grid container  style={{display:'flex',justifyContent:'center'}}>
        <Grid item  >
          <ClubCard name="Developer Students Club"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."
          img="carousel-three.jpg"/>
        </Grid>
        <Grid item  >
          <ClubCard name="Mozilla Campus Club"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."
          img="carousel-two.jpg"/>
        </Grid>
        <Grid item  >
          <ClubCard name="Microsoft student partners"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."
          img="carousel-one.jpg"/>
        </Grid>
        <Grid item  >
          <ClubCard name="ACM"
          desc="Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption.
          Club description.Club description.
          Club description. Club description. Club desciption."
          img="carousel-two.jpg"/>
        </Grid>
                
      </Grid>
 
      <Footer/>
    </div>
   
  );
}



export default Club;




