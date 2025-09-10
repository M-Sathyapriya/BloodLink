import React, { useState} from "react";
import {
  Box,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Typography,
  Paper,
  FormHelperText,
} from "@mui/material";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    donorId: "",
    age: "",
    gender: "",
    bloodGroup: "",
    contact: "",
    email: "",
    donationDate: "",
    location: "",
    units: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.donorId.trim()) {
      tempErrors.donorId = "Donor Id is required";
      isValid = false;
    }

    if (!formData.age) {
      tempErrors.age = "Age is required";
      isValid = false;
    } else if (formData.age <= 4) {
      tempErrors.age = "Age must be greater than 4";
      isValid = false;
    }

    if (!formData.gender) {
      tempErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.bloodGroup.trim()) {
      tempErrors.bloodGroup = "Blood Group is required";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.contact) {
      tempErrors.contact = "Contact number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.contact)) {
      tempErrors.contact =
        "Contact number must start with 6-9 and be 10 digits";
      isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.donationDate) {
      tempErrors.donationDate = "Donation Date is required";
      isValid = false;
    }

    if (!formData.location.trim()) {
      tempErrors.location = "Location is required";
      isValid = false;
    }

    if (!formData.units) {
      tempErrors.units = "Units are required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // ✅ Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // ✅ Submit: validate + store in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // store in localStorage
      localStorage.setItem("donationForm", JSON.stringify(formData));
      alert("Thank you for submitting!");
      console.log("Saved Data:", formData);
    }
  };

  // --- Styles ---
  const formFieldStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const labelStyle = {
    width: "220px",
    textAlign: "left",
    fontWeight: "bold",
    color: "black",
  };

  const inputStyle = {
    flex: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      "&:hover fieldset": {
        borderColor: "black",
      },
    },
  };

  const radioStyle = {
    color: "black",
    "&.Mui-checked": {
      color: "black",
    },
  };

  const buttonStyle = {
    backgroundColor: "#b30e08",
    color: "white",
    px: { xs: 3, md: 4 },
    py: 1.5,
    borderRadius: "25px",
    fontWeight: 600,
    letterSpacing: 1,
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      backgroundColor: "black",
      color: "#b30e08",
      transform: "translateY(-5px) scale(1.05)",
      boxShadow: "0 10px 20px rgba(184, 134, 11, 0.4)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, maxWidth: 700, width: "100%", borderRadius: 3 }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "black", fontWeight: "bold" }}
        >
          MAKE A DONATION
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", mb: 2, color: "black" }}
        >
          Details
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Name</Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              sx={inputStyle}
            />
          </Box>

          {/* Donor Id */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Donor Id</Typography>
            <TextField
              name="donorId"
              value={formData.donorId}
              onChange={handleChange}
              error={!!errors.donorId}
              helperText={errors.donorId}
              sx={inputStyle}
            />
          </Box>

          {/* Age */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Age</Typography>
            <TextField
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
              sx={inputStyle}
            />
          </Box>

          {/* Gender */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Gender</Typography>
            <FormControl error={!!errors.gender} sx={inputStyle}>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio sx={radioStyle} />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio sx={radioStyle} />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio sx={radioStyle} />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && (
                <FormHelperText>{errors.gender}</FormHelperText>
              )}
            </FormControl>
          </Box>

          {/* Blood Group */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Blood Group</Typography>
            <TextField
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              error={!!errors.bloodGroup}
              helperText={errors.bloodGroup}
              sx={inputStyle}
            />
          </Box>

          {/* Contact Number */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Contact Number</Typography>
            <TextField
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              error={!!errors.contact}
              helperText={errors.contact}
              sx={inputStyle}
            />
          </Box>

          {/* Email Id */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Email Id</Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={inputStyle}
            />
          </Box>

          {/* Donation Date */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Donation Date</Typography>
            <TextField
              name="donationDate"
              type="date"
              value={formData.donationDate}
              onChange={handleChange}
              error={!!errors.donationDate}
              helperText={errors.donationDate}
              sx={inputStyle}
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          {/* Location */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>Location</Typography>
            <TextField
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
              sx={inputStyle}
            />
          </Box>

          {/* Number of Units */}
          <Box sx={formFieldStyle}>
            <Typography sx={labelStyle}>
              Number of Units Willing to Donate
            </Typography>
            <TextField
              name="units"
              type="number"
              value={formData.units}
              onChange={handleChange}
              error={!!errors.units}
              helperText={errors.units}
              sx={inputStyle}
            />
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button type="submit" sx={buttonStyle}>
              Donate Now
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default DonationForm;
