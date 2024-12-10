import React  , {useState} from 'react'
import { Box, Avatar, Typography, Stack, Divider, Button } from "@mui/material";
import profile from '../image/profile.jpg'
import { useNavigate } from "react-router-dom";
import Exercises from '../components/Exercises';


const User = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
  return (
    <>
    <br/>
   <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      {/* Profile Header */}
      <Stack alignItems="center" spacing={2} mb={3}>
        <Avatar
          src={profile}
          alt="User Avatar"
          sx={{
            width: { xs: 80, md: 120 },
            height: { xs: 80, md: 120 },
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Ramesh Tamang
        </Typography>
        <Typography variant="body2" color="textSecondary" textAlign="center">
          Enthusiastic Fitness Lover
        </Typography>
      </Stack>

      {/* User Info */}
      <Divider />
      <Box mt={3}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" fontWeight="medium">
              Age
            </Typography>
            <Typography variant="body1" color="text.secondary">
              28 years
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" fontWeight="medium">
              Height
            </Typography>
            <Typography variant="body1" color="text.secondary">
              175 cm
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" fontWeight="medium">
              Weight
            </Typography>
            <Typography variant="body1" color="text.secondary">
              70 kg
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Call-to-Action Buttons */}
      <Divider sx={{ my: 3 }} />
      <Stack spacing={2}>
      
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/progress")} // Navigate to /progress route

        >
          View Progress
        </Button>
      </Stack>
    </Box>
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />

    </>
  )
}

export default User
