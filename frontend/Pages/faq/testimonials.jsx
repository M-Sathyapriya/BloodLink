import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import faq from "./../../Assets/faq.png"; // ✅ import photo

const Testimonial = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
      }}
    >
      {/* Section Title */}
      <Typography
        variant="subtitle2"
        sx={{ color: "orange", fontWeight: 500, letterSpacing: 1 }}
      >
        TESTIMONIALS
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          my: 2,
          textDecoration: "underline",
        }}
      >
        WHAT OUR CLIENTS SAY
      </Typography>

      {/* Testimonial Card */}
      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
          backgroundColor: "#c70000", // red background
          color: "white",
          borderRadius: 1,
          p: 4,
          mt: 4,
        }}
      >
        {/* Quote */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}
        >
          ” PROFESSIONAL SERVICES ALL THE WAY
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ fontSize: "0.95rem", lineHeight: 1.6, mb: 4 }}
        >
          These cases are very important. Illness are very common. Donate to
          help others to overcome illness and survive the most beautiful world!!
        </Typography>

        {/* Client Avatar */}
        <Avatar
          alt="Jhon Alexander"
          src={faq} // ✅ imported photo
          sx={{
            width: 90,
            height: 90,
            mx: "auto",
            mb: 1,
            border: "3px solid white",
          }}
        />

        {/* Client Name */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", letterSpacing: 1 }}
        >
          JHON ALEXANDER
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
