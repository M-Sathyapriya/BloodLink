import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }

    // ✅ Here you can add real authentication logic (API call)
    // For now, let's just navigate to dashboard
    navigate("/admin"); // ✅ Redirect to Dashboard page
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ color: "#b71c1c" }}
        >
          Bloodlink Admin
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1,
              fontWeight: "bold",
              backgroundColor: "#d32f2f",
              "&:hover": { backgroundColor: "#b71c1c" },
              borderRadius: "12px",
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
