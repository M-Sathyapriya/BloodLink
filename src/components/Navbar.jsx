import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Phone, Email, Twitter, Facebook, Instagram, Pinterest } from "@mui/icons-material";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Top Black Bar */}
      <AppBar position="static" sx={{ bgcolor: "black", height: 60 }}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 40 }}>
          {/* Left Section - Phone + Email */}
          <Box display="flex" alignItems="center" gap={4}>
            {/* Phone Section */}
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+91 8428980630</Typography>
            </Box>

            {/* Divider */}
            <Divider orientation="vertical" flexItem sx={{ bgcolor: "white" }} />

            {/* Email Section */}
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography variant="body2">bloodlink@gmail.com</Typography>
            </Box>
          </Box>

          {/* Right Section - Social Icons */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              Follow Now
            </Typography>
            {[Twitter, Facebook, Instagram, Pinterest].map((Icon, idx) => (
              <IconButton
                key={idx}
                size="small"
                sx={{ color: "white", "&:hover": { bgcolor: "darkred" } }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Logo + Navigation */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" style={{ width: 30, height: 30 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#B30308" }}>
              BLOODLINK
            </Typography>
          </Box>

          {/* ✅ Navigation Links using RouterLink */}
          <Box display="flex" alignItems="center" gap={3}>
            <Typography
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "#B30e08" },
              }}
            >
              Home
            </Typography>

            <Typography
              component={RouterLink}
              to="/about"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "#B30e08" },
              }}
            >
              About Us
            </Typography>

            <Typography
              component={RouterLink}
              to="/services"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "#B30e08" },
              }}
            >
              Services
            </Typography>

            <Typography
              component={RouterLink}
              to="/bloodbank"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "#B30e08" },
              }}
            >
              Blood Bank
            </Typography>

            <Typography
              component={RouterLink}
              to="/hospital"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "#B30e08" },
              }}
            >
              Hospital
            </Typography>

            {/* Login Buttons */}
            <Button
              variant="contained"
              onClick={() => navigate("/recipient-login")}
              sx={{
                bgcolor: "#B30e08",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { bgcolor: "red" },
              }}
            >
              Recipient Login
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/Donorlogin")}
              sx={{
                bgcolor: "#B30e08",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { bgcolor: "red" },
              }}
            >
              Donor Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
