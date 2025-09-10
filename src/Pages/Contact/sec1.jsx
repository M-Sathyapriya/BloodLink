import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import all local images
import MainUser from "../../Assets/c1.png";
import User1 from "../../Assets/user.png";

export default function Usersection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1200px",
        mx: "auto",
        py: 6,
        px: 3,
        gap: 6,
      }}
    >
      {/* LEFT IMAGE */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={MainUser}
          alt="User"
          sx={{
            width: 400,
            height: 400,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* RIGHT CONTENT */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Satisfied Users Over The Globe
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.8 }}
        >
          Every drop of blood tells a story — of kindness, courage, and hope.
          From small towns to big cities, thousands of amazing people have
          come together through Bloodlink to make a difference. We're more
          than just a platform — we're a family saving lives, one donation at
          a time.
        </Typography>

        {/* TESTIMONIALS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* User 1 */}
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={User1}
              sx={{ width: 56, height: 56, mx: "auto", mb: 1 }}
            />
            <Typography fontWeight="bold">John Deo</Typography>
            <Typography variant="body2" color="text.secondary">
              Volunteer
            </Typography>
          </Box>

          {/* Arrows */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ bgcolor: "#f5f5f5" }}>
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#f5f5f5" }}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
