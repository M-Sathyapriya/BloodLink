import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import contactImage from "../Assets/login1.png";
import axios from "axios";

// Styled Components
const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "0 8px 8px 0",
  objectFit: "cover",
});

const StyledForm = styled(Box)({
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "8px 0 0 8px",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "25px",
    width: "100%",
  },
});

const StyledButton = styled(Button)({
  width: "100%",
  borderRadius: "25px",
  backgroundColor: "#b30000",
  color: "#fff",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#990000",
  },
});

const DonorLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors = {};
    const phonePattern = /^[6-9]\d{9}$/;

    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit mobile number";

    if (!formData.password.trim())
      newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:3001/api/registration/login",
        {
          emailOrPhone: formData.phone,
          password: formData.password,
          role: "Donor",
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/DonateNow/Form");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setServerError(msg);
    }
  };

  return (
    <Grid
      container
      spacing={0}
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          "You don’t have to be a doctor to save lives – just donate blood."
        </Typography>
      </Grid>

      <Grid item xs={12} md={10}>
        <Grid
          container
          component={Paper}
          elevation={3}
          sx={{ height: "600px", borderRadius: "8px", overflow: "hidden" }}
        >
          {/* Left Side - Form */}
          <Grid item xs={12} md={6}>
            <StyledForm>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 2, color: "#b30000" }}
              >
                Login
              </Typography>

              <Link
                component="button"
                onClick={() => navigate("/")}
                sx={{ mb: 2, fontWeight: "bold", color: "#b30000" }}
              >
                Back to Home
              </Link>

              {serverError && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {serverError}
                </Typography>
              )}

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <StyledTextField
                    label="Registered Mobile Number *"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    type="tel"
                  />

                  <StyledTextField
                    label="Password *"
                    value={formData.password}
                    onChange={handleChange("password")}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    type="password"
                  />

                  {/* Forgot Password Link */}
                  <Box sx={{ textAlign: "right" }}>
                    <Link
                      component="button"
                      onClick={() => navigate("/forgotpassword")}
                      sx={{ fontSize: "14px", color: "#b30000" }}
                    >
                      Forgot Password?
                    </Link>
                  </Box>

                  <StyledButton type="submit">Login</StyledButton>

                  <Typography
                    variant="body2"
                    sx={{ mt: 2, textAlign: "center" }}
                  >
                    If Not Register?{" "}
                    <Link
                      component="button"
                      onClick={() => navigate("/registrationform1")}
                      sx={{ fontWeight: "bold", color: "#b30000" }}
                    >
                      Register
                    </Link>
                  </Typography>
                </Box>
              </form>
            </StyledForm>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "100%" }}>
              <StyledImage src={contactImage} alt="Donor Login" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DonorLogin;
