import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";

const Loader = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 78 ? 78 : prevProgress + 1));
        }, 50); // Increment every 50ms
        return () => clearInterval(timer);
      }, []);
  return (
    <>
         <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        We create your training plan
      </Typography>

      {/* Circular Progress */}
      <Box position="relative" display="inline-flex" mb={2}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={120}
          thickness={4}
          sx={{ color: "#3b82f6" }} // Blue color
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Typography variant="body1" color="textSecondary" mb={4}>
        We create a workout according to demographic profile, activity level, and interests
      </Typography>

      {/* Animated Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          width: "200px",
          height: "50px",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#333" },
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.05)" },
            "100%": { transform: "scale(1)" },
          },
        }}
      >
        Start Training
      </Button>
    </Box>
    </>
  )
}

export default Loader
