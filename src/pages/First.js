import React from 'react'
import { Container, Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../image/first.jpg"; // Add your image in src/assets folder.

const First = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/choose"); // Navigate to the /choose route
  };
  return (
    <>
  <Box
  sx={{
    position: "relative",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Align content to the bottom
    alignItems: "center", // Center content horizontally
    color: "white",
    padding: "2rem", // Add padding to prevent content from touching edges
  }}
>
  <Box sx={{ textAlign: "center", maxWidth: "400px" }}>
    {/* Text Content */}
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ marginBottom: "1rem" }}
    >
      Welcome to FitzApp
    </Typography>
    <Typography
      variant="body1"
      sx={{ marginBottom: "2rem", lineHeight: "1.5" }}
    >
      The first fitness app to improve your fitness, practice mindfulness, or
      prepare for new adventures with a series of specially designed workouts
      and meditations.
    </Typography>

    {/* Button */}
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
        padding: "0.75rem 2rem", // Adjust button size
        fontSize: "1rem",
      }}
    >
      Get Started
    </Button>
  </Box>
</Box>


      
    </>
  )
}

export default First
