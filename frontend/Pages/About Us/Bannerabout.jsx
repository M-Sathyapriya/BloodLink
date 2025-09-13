import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import aboutban1 from "../../Assets/b.png"; // your banner image

const Bannerabout = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <Box sx={{ position: "relative", width: "100%", height: { xs: 250, md: 400 } }}>
      {/* Background Image */}
      <Box
        component="img"
        src={aboutban1}
        alt="banner"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: "bold",
            color: "#fff",
            mb: 2,
            textTransform: "capitalize",
          }}
        >
          About Us
        </Typography>

        {/* Breadcrumb */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")} // ✅ Navigate to Home
          >
            HOME
          </span>
          <span style={{ color: "red" }}> / About Us</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Bannerabout;
