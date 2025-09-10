import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        password,
      });
      alert("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      alert("Error resetting password");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Reset the Password
      </Typography>

      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "darkred", ":hover": { backgroundColor: "red" } }}
        onClick={handleResetPassword}
      >
        Reset Password
      </Button>
    </Paper>
  );
};

export default ResetPassword;
