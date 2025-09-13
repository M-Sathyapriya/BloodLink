import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // get email from navigation

  const handleVerifyOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
      alert("OTP verified!");
      navigate("/resetpassword", { state: { email } }); // pass email to Reset page
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Enter the OTP
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Enter the OTP sent to your email address.
      </Typography>

      <TextField
        label="OTP"
        fullWidth
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "darkred", ":hover": { backgroundColor: "red" } }}
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </Button>
    </Paper>
  );
};

export default OtpVerify;
