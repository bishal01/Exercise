import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import Logo from './pics/logo.jpg';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" >
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <Box
  component="img"
  src={Logo}
  alt="logo"
  sx={{
    width: { xs: '180px', sm: '250px' }, // Slightly increased size
    height: 'auto', // Maintains aspect ratio
    objectFit: 'contain', // Ensures proper scaling
  }}
/>

        <Typography variant='h6' pb='40px'>
          <b></b>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer