import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import donorImage from "../../Assets/Donor.png"; // ✅ Check path

// Styled image
const StyledImage = styled("img")({
  width: "80%",
  height: "90%",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
});

// Styled button
const StyledButton = styled(Button)({
  backgroundColor: "#b71c1c",
  color: "#fff",
  borderRadius: "30px",
  padding: "10px 30px",
  fontWeight: "600",
  fontSize: "14px",
  textTransform: "none",
  width: "180px",
  "&:hover": {
    backgroundColor: "#7f0000",
  },
});

const DonorHeroSection = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        minHeight: { xs: "auto", md: "550px" },
        maxWidth: "90%",
        margin: "0 auto",
        gap: 0,
      }}
    >
      {/* Left Image Section */}
      <Box
        sx={{
          flex: 1,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <StyledImage src={donorImage} alt="Donor" />
      </Box>

      {/* Right Content Section */}
      <Box
        sx={{
          flex: 1,
          height: { xs: "auto", md: "450px" },
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 3, sm: 4 },
          py: { xs: 4, sm: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif", mb: 1 }}
        >
          ONE <span style={{ color: "#b71c1c" }}>DROP</span>
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif", mb: 4 }}
        >
          ENDLESS <span style={{ color: "#b71c1c" }}>HOPE...</span>
        </Typography>

        {/* Buttons with navigation */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <StyledButton onClick={() => navigate("/DonorLogin")}>
            Donor Login
          </StyledButton>
          <StyledButton onClick={() => navigate("/RegistrationForm1")}>
            Donor Register
          </StyledButton>
          <StyledButton onClick={() => navigate("/DonateNow")}>
            Donate Now
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DonorHeroSection;
