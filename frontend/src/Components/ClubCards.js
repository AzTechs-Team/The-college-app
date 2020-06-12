import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

const ClubCard=(props)=>{
    return(
    <Flippy
    flipOnHover={true}
    flipDirection="horizontal" 
    style={{ width: '450px', height: '250px',marginBottom:'25px',marginRight:'25px' }} 
    >
        <FrontSide style={{
        backgroundImage:` url(${require(`../Images/${props.img}`)})`,backgroundSize:'cover'}}>
        <br/><br/><br/>
        <div style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <hr style={{height:'4px',backgroundColor:'white',width:'60%'}}/>
            <h1 style={{textAlign:'center',color:'white'}}>{props.name}</h1>
            <hr style={{height:'4px',backgroundColor:'white',width:'60%'}}/>
        </div>
        </FrontSide>

        <BackSide
        style={{ display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Typography variant="h5">{props.name}</Typography><br/>
             <Typography variant="body2" color="textSecondary" component="p" style={{color:'#253859'}}
             align="center">
            {props.desc}
            
            </Typography>
            <br/>

          <div style={{ display:'flex',justifyContent:'center',flexDirection:'row'}}>
          <Link 
        href="https://www.google.com/forms/about/" 
        target="_blank" 
        rel="noopener"
        style={{textDecoration:'none'}}
        >
          <Button size="small" variant="contained" 
          style={{backgroundColor:'#ff6769',color:'white',textDecoration:'none'}}
        >
          Join Club!
        </Button></Link>&ensp;
          <Button size="small" variant="contained" 
          style={{backgroundColor:'#ff6769',color:'white',textDecoration:'none'}}
        component={Link} to='/events' >
          Checkout events!
        </Button>
        </div>

        </BackSide>
    </Flippy>
        )
    }


export default ClubCard;