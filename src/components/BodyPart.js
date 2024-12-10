import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from './pics/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: '4px solid #FFD700', // Gold for an elegant highlight
            background: '#2C2F33', // Dark gray to blend with the page
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
            color: '#FFFFFF', // White text for readability
          }
        : {
            background: '#2C2F33', // Dark gray for consistency
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
            color: '#FFFFFF', // White text for readability
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#D3D3D3" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;