import { Box } from '@mui/material';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import User from './pages/User';
import Food from './pages/Food'
import First from './pages/First';
import Second from './pages/Second';
import Loader from './pages/Loader';
const App = () => {
  const location = useLocation();

  // Check if the current route is "/"
  const isExcludedPage = location.pathname === "/" || location.pathname === "/choose";

  return (
    <Box
   
    sx={{
     
      backgroundColor: "#121212", // Dark gray background
      minHeight: "100vh", // Ensure the background covers the entire page
    }} >

      {/* Render Navbar and Footer conditionally */}
      {!isExcludedPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/choose" element={<Second />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/food" element={<Food />} />
        <Route path="/progress" element={<Loader />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      
      {!isExcludedPage && <Footer />}
    </Box>
  );
};


export default App;