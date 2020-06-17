import React from 'react';
import Grid from '@material-ui/core/Grid'
import EventCard from '../Components/EventCards'
import Title from '../Components/Title'
import '../Styles/margin.css'

//decalring Events to be rendered inside content of Navbar component
function Events() {
  return (
    <div style={{backgroundColor:"#2d2d2d"}}>   
      {/* display title*/}
      <Title name="Events"/>
      {/* Used grid component of material ui to align cards and make it responsive */}
      <div id="events">
      <Grid container  style={{display:'flex',justifyContent:'space-around'}}>
        <Grid item  >
          <EventCard 
          name="A"
          event="Event 1" 
          dateTime="April 28 2020, 10:00am to 12:00pm" 
          pic="carousel-one.jpg"
          desc="Event description.Event description.
          Event description. Event description. Event desciption."
          logo="dsc.png"/>
        </Grid>
        <Grid item  >
          <EventCard 
          name="B"
          event="Event 2" 
          dateTime="May 29 2020, 11:00am to 1:00pm" 
          pic="carousel-two.jpg"
          desc="Event description.Event description.
          Event description. Event description. Event desciption."
          logo="microsoft.png"/>
        </Grid>
        <Grid item  >
          <EventCard 
          name="C"
          event="Event 3" 
          dateTime="June 30 2020, 12:00pm to 2:00pm" 
          pic="carousel-three.jpg"
          desc="Event description.Event description.
          Event description. Event description. Event desciption."
          logo="mozilla.png"/>
        </Grid>
      </Grid><br/><br/>
      {/* display footer */}
    </div>
    </div>
  );
}



export default Events;




