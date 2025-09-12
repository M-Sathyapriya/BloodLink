import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import contactImage from "../Assets/login1.png";

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
});

const StyledForm = styled(Box)({
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "8px",
  height: "90%",
  boxShadow: "0 0 20px rgba(0,0,0,0.1)",
});

// ✅ Black border + label when clicked
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "25px",
    width: "500px",
    "@media (max-width: 600px)": {
      width: "100%",
    },
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
});

const StyledButton = styled(Button)({
  width: "300px",
  borderRadius: "25px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
});

const Recipientlogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number starting with 6-9";

    if (!formData.bloodGroup.trim())
      newErrors.bloodGroup = "Blood group is required";

    if (!formData.password.trim())
      newErrors.password = "Password is required";

    if (!formData.agree)
      newErrors.agree = "You must agree before logging in";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
      localStorage.setItem("loginData", JSON.stringify(formData));

      // ✅ Redirect to Recipientrequest page
      navigate("/Recipientrequest");

      setFormData({
        name: "",
        phone: "",
        bloodGroup: "",
        password: "",
        agree: false,
      });
      setErrors({});
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Grid container spacing={0}>
          {/* Left Form */}
          <Grid item xs={12} md={6}>
            <StyledForm>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Login
                </Typography>
                <Typography
                  sx={{
                    color: "#b30e08",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Typography>
              </Box>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <StyledTextField
                  label="Name *"
                  value={formData.name}
                  onChange={handleChange("name")}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  variant="outlined"
                />

                <StyledTextField
                  label="Registered Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                  variant="outlined"
                />

                <StyledTextField
                  label="Blood Group *"
                  value={formData.bloodGroup}
                  onChange={handleChange("bloodGroup")}
                  error={Boolean(errors.bloodGroup)}
                  helperText={errors.bloodGroup}
                  variant="outlined"
                />

                {/* Password Field */}
                <StyledTextField
                  type="password"
                  label="Password *"
                  value={formData.password}
                  onChange={handleChange("password")}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  variant="outlined"
                />

                {/* Agree to Terms - Black Checkbox */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agree}
                      onChange={handleChange("agree")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the <span style={{ color: "red" }}>Terms</span> and{" "}
                      <span style={{ color: "red" }}>Privacy Policy</span>
                    </Typography>
                  }
                />
                {errors.agree && (
                  <Typography color="error" variant="caption">
                    {errors.agree}
                  </Typography>
                )}

                {/* Forgot Password */}
                <Typography
                  align="left"
                  sx={{
                    color: "#b30e08",
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot Password?
                </Typography>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#b30e08",
                      color: "white",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "red",
                      },
                    }}
                  >
                    Login
                  </StyledButton>
                </Box>

                <Typography align="center" sx={{ mt: 2 }}>
                  If Not Register?{" "}
                  <span
                    style={{ color: "#b30e08", cursor: "pointer" }}
                    onClick={() => navigate("/RegistrationForm1")}
                  >
                    Register
                  </span>
                </Typography>
              </form>
            </StyledForm>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { md: "100%" },
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <StyledImage src={contactImage} alt="Donation" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Recipientlogin;
