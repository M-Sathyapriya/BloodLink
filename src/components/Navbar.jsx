import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { Phone, Email, Twitter, Facebook, Instagram, Pinterest } from "@mui/icons-material";
import Logo from "../Assets/logo.png";


const Navbar = () => {
  return (
    <Box>
      {/* Top Black Bar */}
      <AppBar position="static" sx={{ bgcolor: "black", height: 60 }}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 40 }}>
          <Box display="flex" alignItems="center" gap={4}>
  {/* Phone Section */}
  <Box display="flex" alignItems="center" gap={1}>
    <Phone fontSize="small" />
    <Typography variant="body2">+91 8428980630</Typography>
  </Box>

  {/* Divider (vertical line) */}
  <Divider orientation="vertical" flexItem sx={{ bgcolor: "white" }} />

  {/* Email Section */}
  <Box display="flex" alignItems="center" gap={1}>
    <Email fontSize="small" />
    <Typography variant="body2">bloodlink@gmail.com</Typography>
  </Box>
</Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              Follow Now
            </Typography>
            <IconButton size="small" sx={{ color: "white","&:hover": { bgcolor: "darkred" }, }}>
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white","&:hover": { bgcolor: "darkred" }, }}>
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white","&:hover": { bgcolor: "darkred" }, }}>
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white","&:hover": { bgcolor: "darkred" }, }}>
              <Pinterest fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Logo + Navigation */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src={Logo} // blood drop icon (replace with your logo)
              alt="logo"
              style={{ width: 30, height: 30 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#B30308" }}>
              BLOODLINK
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box display="flex" alignItems="center" gap={3}>
             <Link
  href="#"
  underline="none"
  color="inherit"
  sx={{
    fontWeight: "bold",
    "&:hover": {
      color: "#B30e08",           // changes color on hover
    
    },
  }}
>
 Home
</Link>
             <Link
  href="#"
  underline="none"
  color="inherit"
  sx={{
    fontWeight: "bold",
    "&:hover": {
      color: "#B30e08",           // changes color on hover
    
    },
  }}
>
About Us
</Link>
             <Link
  href="#"
  underline="none"
  color="inherit"
  sx={{
    fontWeight: "bold",
    "&:hover": {
      color: "#B30e08",           // changes color on hover
    
    },
  }}
>
 Services
</Link>
            <Link
  href="#"
  underline="none"
  color="inherit"
  sx={{
    fontWeight: "bold",
    "&:hover": {
      color: "#B30e08",           // changes color on hover
    
    },
  }}
>
 Blood Bank
</Link>

            <Link
  href="#"
  underline="none"
  color="inherit"
  sx={{
    fontWeight: "bold",
    "&:hover": {
      color: "#B30e08",           // changes color on hover
      //textDecoration: "underline", // adds underline
    },
  }}
>
  Hospital
</Link>


            <Button
              variant="contained"
              sx={{
                bgcolor: "#B30e08",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { bgcolor: "darkred" },
              }}
            >
              Recipient Login
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#B30e08",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { bgcolor: "darkred" },
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