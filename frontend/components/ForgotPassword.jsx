import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Simple email validation regex
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendOtp = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Simulate OTP sending delay
    setTimeout(() => {
      alert(`OTP sent to email: ${email}\n(For demo, OTP is 123456)`);
      navigate("/verifyotp", { state: { email } }); // Pass email to OTP page
    }, 1000);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Forgot your Password?
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Enter your registered email address and we’ll send you the OTP to reset your password.
      </Typography>

      <TextField
        label="Email ID"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
        placeholder="Enter your registered email"
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "darkred", ":hover": { backgroundColor: "red" } }}
        onClick={handleSendOtp}
      >
        Send OTP
      </Button>
    </Paper>
  );
};

export default ForgotPassword;
