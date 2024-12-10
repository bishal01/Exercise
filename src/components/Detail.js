import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

import BodyPartImage from './pics/body-part.png';
import EquipmentImage from './pics/equipment.png';
import TargetImage from './pics/target.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
      <Typography 
        sx={{ fontSize: { lg: '64px', xs: '30px' } }} 
        fontWeight={700} 
        textTransform="capitalize" 
        color="#00FFFF" // Title/Heading Color
      >
        {name}
      </Typography>
      <Typography 
        sx={{ fontSize: { lg: '24px', xs: '18px' } }} 
        color="#D3D3D3" // Text Content/Subtitle Color
      >
        Exercises keep you strong.{' '}
        <span style={{ textTransform: 'capitalize' }}>{name}</span> but is one of the best 
        <br /> exercises to target your {target}. It will help you improve your 
        <br /> mood and gain energy.
      </Typography>
      {extraDetail?.map((item) => (
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button sx={{ background: '#2C2F33', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }} color="#D3D3D3">
            {item.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
  
  );
};

export default Detail;