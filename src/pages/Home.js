import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import { useLocation } from "react-router-dom";
import male from '../image/male.jpg'
import female from '../image/women.png'
import other from '../image/other.jpg'


const Home = () => {
  const location = useLocation();
  const { gender } = location.state || {};
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');



  return (
    <Box>
      <HeroBanner gender={gender} />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home