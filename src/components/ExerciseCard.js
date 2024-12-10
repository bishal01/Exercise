import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
  <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
  <Stack direction="row">
    <Button 
      sx={{ 
        ml: '21px', 
        color: '#fff', 
        background: '#2C2F33', // Dark gray background for button
        fontSize: '14px', 
        borderRadius: '20px', 
        textTransform: 'capitalize' 
      }}
    >
      {exercise.bodyPart}
    </Button>
    <Button 
      sx={{ 
        ml: '21px', 
        color: '#fff', 
        background: '#2C2F33', // Dark gray background for button
        fontSize: '14px', 
        borderRadius: '20px', 
        textTransform: 'capitalize' 
      }}
    >
      {exercise.target}
    </Button>
  </Stack>
  <Typography 
    ml="21px" 
    color="#D3D3D3" // Text color for exercise name
    fontWeight="bold" 
    sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
    mt="11px" 
    pb="10px" 
    textTransform="capitalize"
  >
    {exercise.name}
  </Typography>
</Link>

);

export default ExerciseCard;