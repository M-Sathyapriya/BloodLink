import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useNavigate } from "react-router-dom";
import hero1 from "./../../Assets/hero1.png";

const HeroSection = () => {
  const navigate = useNavigate(); 

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "90vh", md: "100vh" },
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.2)",
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Intro Video */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box
              sx={{
                bgcolor: "#B30E08",
                borderRadius: "4px",
                p: 1,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
                height: "40px",
              }}
            >
              <PlayCircleFilledWhiteIcon sx={{ fontSize: 24, color: "white" }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "normal" }}>
              Intro Video
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{ color: "#B30E08", fontWeight: "bold", mb: 1 }}
          >
            Donate Blood, Save Life!
          </Typography>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3.2rem" },
              mb: 3,
            }}
          >
            Donate Blood And <br /> Inspire Others.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#B30E08",
              borderRadius: "25px",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "16px",
              "&:hover": { bgcolor: "darkred" },
              width: "fit-content",
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Bottom Boxes - Register + Donate */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 0,
          px: { xs: 3, md: 8 },
          pb: 0,
          mt: 2,
        }}
      >
        {/* Register */}
        <Box
          sx={{
            bgcolor: "#B30E08",
            color: "white",
            p: 3,
            flex: 1,
            minHeight: "120px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/RegistrationForm1")}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Register Now
          </Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.4, fontSize: "14px" }}
          >
            Be a hero — sign up to become a blood donor and help save lives in
            your community. Your one decision can give someone another chance at
            life.
          </Typography>
        </Box>

        {/* Donate */}
        <Box
          sx={{
            bgcolor: "black",
            color: "white",
            p: 3,
            flex: 1,
            minHeight: "120px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/Donorlogin")} // ✅ Navigate to DonateNow page
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Donate now
          </Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.4, fontSize: "14px" }}
          >
            Make a difference today by donating blood. Just one donation can
            save up to three lives. Be the hope someone is praying for.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
