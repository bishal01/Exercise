import React ,{useState} from 'react'
import { Box, Typography, Button, IconButton, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Second = () => {
    const navigate = useNavigate();
    const handleGenderClick = (gender) => {
      navigate("/home", { state: { gender } }); // Navigate to Home and pass the gender
    };
  
  return (
    <>
          <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
   

      {/* Main Content */}
      <Box>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "1.5rem" }}
        >
          Choose gender
        </Typography>

        {/* Gender Options */}
        <Box>
          {["Woman", "Man", "Gender neutral"].map((option, index) => (
            <Card
              key={index}
              onClick={() => handleGenderClick(option)}
              sx={{
                marginBottom: "1rem",
                border: "1px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography variant="h6" role="img" aria-label={option}>
                  {index === 0 ? "👩" : index === 1 ? "👨" : "🧑"}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {option}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            padding: "0.75rem",
            borderRadius: "8px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>

    </>
  )
}

export default Second
