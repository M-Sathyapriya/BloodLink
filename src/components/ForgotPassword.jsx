import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/send-otp", { email });
      alert("OTP sent to your registered email!");
      navigate("/verifyotp", { state: { email } }); // pass email to OTP page
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Forget your Password ?
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Enter your email address and we’ll send you the OTP to reset the password.
      </Typography>

      <TextField
        label="Email ID"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
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
