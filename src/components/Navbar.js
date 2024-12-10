import { Stack, Box, Drawer, IconButton, Link as MuiLink ,Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger icon
import CloseIcon from '@mui/icons-material/Close'; // Optional close icon for Drawer
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import Logo from "./pics/logo.jpg";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    sx={{
      gap: { sm: '', xs: '10px' }, // Adjust gap for small and large screens
      mt: { sm: '', xs: '' },
      pt:{xs:'20px'},
      px: '20px',
    }}
  >
    {/* Logo */}
    <MuiLink href="/home">
      <img
        src={Logo} // Replace with your logo path
        alt="Logo"
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'contain', // Ensures proper scaling
        }}
      />
    </MuiLink>
    <Typography
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show only on small screens
          fontFamily: 'Alegreya',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#F5F5F5',
        }}
      >
        FITZAPP
      </Typography>

    {/* Desktop Navigation Items */}
    <Stack
      direction="row"
      spacing={{ xs: 2, sm: 3 }}
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
      sx={{
        display: { xs: 'none', sm: 'flex' }, // Hide on small screens
        ml: { sm: '', xs: '10px' }, // Adds margin-left on larger screens
      }}
    >
      <MuiLink href="/home" underline="none" color="#FFFFFF">
        Home
      </MuiLink>
      <MuiLink href="#exercises" underline="none" color="#FFFFFF">
        Exercises
      </MuiLink>
      <MuiLink href="user" underline="none" color="#FFFFFF">
        User
      </MuiLink>
      <MuiLink href="food" underline="none" color="#FFFFFF">
        Food
      </MuiLink>

    </Stack>

    {/* Mobile Menu Button */}
    <IconButton
      sx={{ display: { xs: 'flex', color:'#fff', sm: 'none' } }} // Show only on small screens
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>

    {/* Drawer for Mobile Menu */}
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 250,
          padding: 2,
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <IconButton sx={{ display: 'flex',justifyContent: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        <Stack
          direction="column"
          spacing={2}
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-start"
        >
          <MuiLink href="/home" underline="none" color="#3A1212">
            Home
          </MuiLink>
          <MuiLink href="#exercises" underline="none" color="#3A1212">
            Exercises
          </MuiLink>
          <MuiLink href="user" underline="none" color="#3A1212">
            User
          </MuiLink>
          <MuiLink href="food" underline="none" color="#3A1212">
            Food
          </MuiLink>
        </Stack>
      </Box>
    </Drawer>

    {/* Right-Side Image (Desktop Only) */}
    <Box
      component="img"
      alt="Right Side"
      sx={{
        display: { xs: 'none', sm: 'block' }, // Hide on small screens
        width: '700px',
        height: '1px',
        objectFit: 'contain',
      }}
    />
  </Stack>
  );
}

export default Navbar;