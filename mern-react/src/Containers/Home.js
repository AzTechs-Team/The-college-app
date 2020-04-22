import React from 'react';
import Carousel from '../Components/Carousel';
import Card from '../Components/Card';
import Grid from '@material-ui/core/Grid'

function Home() {
  return (
    <div >        
      <Carousel/>
      <Grid container  style={{display:'flex',justifyContent:'space-evenly'}}>
        <Grid item md={3}>
          <Card/>
        </Grid>
        <Grid item md={3}>
          <Card/>
        </Grid>
        <Grid item md={3}>
          <Card/>
        </Grid>
      </Grid>
    </div>

  );
}



export default Home;




