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
import {
  Phone,
  Email,
  Twitter,
  Facebook,
  Instagram,
  Pinterest,
} from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Top AppBar */}
      <AppBar
        position="fixed"
        elevation={2}
        sx={{ bgcolor: "white", color: "black", zIndex: 1300 }}
      >
        {/* Top Black Strip */}
        <Toolbar
          sx={{
            bgcolor: "black",
            color: "white",
            justifyContent: "space-between",
            minHeight: 40,
          }}
        >
          {/* Contact Info */}
          <Box display="flex" alignItems="center" gap={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+91 8428980630</Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: "white" }} />

            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography variant="body2">bloodlink@gmail.com</Typography>
            </Box>
          </Box>

          {/* Social Icons */}
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

        {/* Main Navbar */}
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 70 }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" style={{ width: 30, height: 30 }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#B30308" }}
            >
              BLOODLINK
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box display="flex" alignItems="center" gap={3}>
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Blood Bank", to: "/bloodbank" },
              { label: "Hospital", to: "/hospital" },
            ].map((item) => (
              <Typography
                key={item.to}
                component={RouterLink}
                to={item.to}
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { color: "#B30e08" },
                }}
              >
                {item.label}
              </Typography>
            ))}

            {/* Login Buttons */}
            <Button
              variant="contained"
              onClick={() => navigate("/Recipientlogin")}
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

      {/* Spacer to offset the fixed AppBar height */}
      <Toolbar sx={{ minHeight: 110 }} />
    </>
  );
};

export default Navbar;
