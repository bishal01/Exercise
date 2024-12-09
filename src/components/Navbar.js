import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "./pics/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px='20px'>
      <Link to="/">
        <img src={Logo} alt="Logo" style={{width: '30px' , height: '48px', margin:'0 5px'}} />
      </Link>

      <Stack
      direction="row"
      
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end">
    
      <Link to="/" style={{ textDecoration: 'none',marginRight:'20px', color: '#3A1212' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none',marginRight:'20px', color: '#3A1212' }}>Exercises</a>
      <a href="user" style={{ textDecoration: 'none', color: '#3A1212',marginRight:'20px', }}>User</a>
      <a href="food" style={{ textDecoration: 'none', color: '#3A1212',marginRight:'20px', }}>Food</a>


    </Stack>

    </Stack>
  );
}

export default Navbar;