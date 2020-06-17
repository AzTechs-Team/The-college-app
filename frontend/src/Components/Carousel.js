import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from '../Images/main1.jpg'
import img2 from '../Images/main2.jpg'
import img3 from '../Images/main3.jpg'

//decalring a constant array with information about carousel
const content = [
	{image: img1},
	{image: img2},
	{image: img3}
];

//declaring and exporting function "Carousle"
function Carousel(){
    return(
       <div><br/><br/><br/>
        <Slider autoplay={2500} > 
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url(${item.image})`,
					backgroundSize:"cover",
					backgroundRepeat:"no-repeat",
					backgroundPosition:'center'
				}}
				>					
				</div>
			))}
		</Slider>
		</div>
    )
    
    
}

export default Carousel;