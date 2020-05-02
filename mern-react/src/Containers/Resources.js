import React from 'react';
import Footer from '../Components/Footer'
import Title from '../Components/Title'
import About from '../Components/About';
import ResourceTabs from '../Components/ResourceTabs';
import { Typography } from '@material-ui/core';



function Club() {
  return (
    <div>        
      <Title name="Resources"/>
      <About 
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales
      odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet 
      porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra 
      sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae
       risus non diam auctor lobortis id eu mauris. Pellentesque commodo urna quis
        neque luctus ultricies. Mauris pretium posuere orci, id tincidunt ante 
        tincidunt in."
        btn="Check out Workshops!"/>
        <br/><br/>
        <Typography variant="h6" align="center">Check out notes of various subjects along with 
        previous papers to help you study better!!</Typography>
        <br/>
        <ResourceTabs/>
      <Footer/>
    </div>
   
  );
}



export default Club;




