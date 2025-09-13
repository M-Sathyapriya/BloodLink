import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import contactImage from "../Assets/login1.png";
import axios from "axios";

// Styled components
const StyledContainer = styled(Grid)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
});

const StyledFormWrapper = styled(Box)({
  padding: "2rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "25px",
    backgroundColor: "#fff",
  },
  "& .MuiInputBase-input": {
    padding: "12px 20px",
  },
});

const StyledButton = styled(Button)({
  width: "150px",
  borderRadius: "25px",
  backgroundColor: "#b71c1c",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#a10000",
  },
});

const RecipientLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (serverError) setServerError("");
  };

  const validate = () => {
    const newErrors = {};
    const phonePattern = /^[6-9]\d{9}$/;

    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter valid registered mobile number";

    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          role: "Receiver",
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/Recipientrequest");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setServerError(msg);
    }
  };

  return (
    <StyledContainer container>
      {/* Left Section - Form */}
      <Grid item xs={12} md={6}>
        <StyledFormWrapper>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Login
            </Typography>
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="hover"
              sx={{ color: "#b71c1c", fontWeight: "bold", cursor: "pointer" }}
            >
              Back to Home
            </Link>
          </Box>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <StyledTextField
              label="Registered Mobile Number *"
              value={formData.phone}
              onChange={handleChange("phone")}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              type="tel"
              placeholder="Enter 10 digit number"
              fullWidth
            />

            <StyledTextField
              label="Password *"
              value={formData.password}
              onChange={handleChange("password")}
              error={Boolean(errors.password)}
              helperText={errors.password}
              type="password"
              placeholder="Enter Password"
              fullWidth
            />

            {serverError && (
              <Typography color="error" fontSize="14px">
                {serverError}
              </Typography>
            )}

            <Box textAlign="left" mt={-1}>
              <Link
                component="button"
                onClick={() => navigate("/forgotpassword")}
                underline="none"
                sx={{ fontSize: "14px", color: "#b71c1c", fontWeight: 500 }}
              >
                Forget Password ?
              </Link>
            </Box>

            <Box mt={1}>
              <StyledButton type="submit" variant="contained">
                Login
              </StyledButton>
            </Box>

            <Typography variant="body2" mt={2} textAlign="center">
              If Not Register?{" "}
              <Link
                component="button"
                onClick={() => navigate("/registrationform1")}
                underline="none"
                sx={{ color: "#b71c1c", fontWeight: "bold", cursor: "pointer" }}
              >
                Register
              </Link>
            </Typography>
          </form>
        </StyledFormWrapper>
      </Grid>

      {/* Right Section - Image */}
      <Grid item xs={12} md={6} sx={{ height: "100vh" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
          }}
        >
          <img
            src={contactImage}
            alt="Login Visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.6)", // mimic red overlay
            }}
          />
        </Box>
      </Grid>
    </StyledContainer>
  );
};

export default RecipientLogin;
