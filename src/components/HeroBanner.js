import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

import HeroBannerImage from './pics/banner.png';
import male from '../image/male.jpg'
import female from '../image/women.png'
import other from '../image/other.jpg'
import def from '../image/ronaldo.jpg'

const HeroBanner = ({gender}) => {
  const genderImages = {
    Woman: female,
    Man: male,
    "Gender neutral": other,
  };
  const selectedImage = genderImages[gender] || def; // Default image


  return (
    <Box sx={{
      mt:{lg:'212px', xs:'70px'},
      ml:{sm:'50px'},
      position:'relative',
      p:'20px'
    }}>
      <Typography color='#00FFFF' fontWeight= '600' fontSize='26px'>Fitness Club</Typography>
      <Typography color='#fff' fontWeight={700} sx={{fontSize:{ lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>Sweat, Smile <br/>& Repeat... </Typography>
      <Typography color='#F5F5F5' fontSize='22px' lineHeight='35px' mb={4}>Check out the most effective exercises</Typography>
      <Button
  variant="contained"
  href="#Exercises"
  sx={{
    backgroundColor: '#2C2F33', // Dark gray background
    color: '#FFFFFF', // White text for contrast
    padding: '10px',
    '&:hover': {
      backgroundColor: '#23272A', // Slightly darker gray on hover
    },
  }}
>
  Explore Exercises
</Button>      <Typography fontWeight={600} color="#FF2625" sx={{
                                                    opacity : 0.1,
                                                    display : {lg:'block', xs:'none'}
      }} fontSize='200px'>Exercise</Typography>
      <img src={selectedImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner;
