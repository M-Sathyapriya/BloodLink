import React from "react";
import { Box, Typography, Button } from "@mui/material";
import doctorImage from "../../Assets/aboutus1.png"; // ✅ Import your image

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        bgcolor: "#fff",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 1, fontFamily: "Poppins, sans-serif" }}
        >
          Who We Are
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Linking lives through blood
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            mb: 3,
            fontSize: "1rem",
            lineHeight: 1.6,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          At Blood link, our mission is to ensure every patient gets timely
          access to safe, screened blood. We’re committed to saving lives by
          bridging the gap between donors and those in urgent need.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            borderRadius: "50px",
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#c20000" },
          }}
        >
          Explore Now
        </Button>
      </Box>

      {/* Right Image */}
      <Box
        component="img"
        src={doctorImage}
        alt="Doctor"
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "400px" },
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default WhoWeAre;
