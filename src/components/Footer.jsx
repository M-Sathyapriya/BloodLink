import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import image1 from "../Assets/footer1.png";
import image2 from "../Assets/footer2.png"
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

const Footer = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  // ✅ Define routes for quick links
  const quickLinks = [
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/Contact" },
    { label: "Privacy Policy", path: "/Privacypolicy" },
    { label: "Terms And Conditions", path: "/terms" },
    { label: "Faq", path: "/faq" },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      {/* 🔴 Top Red Banner */}
      <Box
        sx={{
          bgcolor: "#b40001",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Lets Change the World, Join Us Now!
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            Bloodlink is a platform that helps to streamline blood donation and
            blood requests which puts the power to save a life in the palm of
            your hand.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "#b40001",
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          onClick={() => navigate("/contact")} // ✅ Navigate to Contact Page
        >
          Contact Us
        </Button>
      </Box>

      {/* ⚫ Black Footer */}
      <Box sx={{ bgcolor: "#111111", color: "white", p: 5 }}>
        {/* 4 Columns */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          {/* About Us */}
          <Box sx={{ width: "23%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              We are a dedicated network committed to making blood donation
              fast, easy, and impactful. Every donation brings hope and a second
              chance to someone in need.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1(456)637-897, 899
            </Typography>
            <Typography variant="body2">
              Email: contact@blood@gmail.com
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ width: "20%", cursor: "pointer" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            {quickLinks.map((item, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{ mb: 1, "&:hover": { color: "red" } }}
                onClick={() => navigate(item.path)}
              >
                <span style={{ color: "red" }}>»</span> {item.label}
              </Typography>
            ))}
          </Box>

          {/* Our Services */}
          <Box sx={{ width: "20%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Our Services
            </Typography>
            {[
              "Blood Donation",
              "Health Check",
              "Blood Bank",
              "Donation Process",
              "Blood Info",
            ].map((item, i) => (
              <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                <span style={{ color: "red" }}>»</span> {item}
              </Typography>
            ))}
          </Box>

          {/* Latest News */}
          <Box sx={{ width: "30%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Latest News
            </Typography>

            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <img
                src={image1}
                alt="news1"
                style={{ borderRadius: "4px" }}
              />
              <Box>
                <Typography variant="body2">
                  A formula for help and Happiness
                </Typography>
                <Typography variant="caption" sx={{ color: "red" }}>
                  18 Feb 2025
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
              <img
                src={image2}
                alt="news2"
                style={{ borderRadius: "4px" }}
              />
              <Box>
                <Typography variant="body2">
                  Donation is Hope for poor helpless children
                </Typography>
                <Typography variant="caption" sx={{ color: "red" }}>
                  18 Feb 2025
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid gray", my: 3 }} />

        {/* Subscribe + Social Icons SAME ROW */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Subscribe Section */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Subscribe us for more update and news !!
            </Typography>
            <Box display="flex" alignItems="center">
              <TextField
                size="small"
                placeholder="Enter your Email"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  borderRadius: "2px 0 0 2px",
                  "& fieldset": { border: "none" },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "darkred",
                  borderRadius: "0 2px 2px 0",
                  textTransform: "none",
                  px: 3,
                  "&:hover": { bgcolor: "red" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          {/* Social Media */}
          <Box>
            {[Facebook, Twitter, Instagram, Pinterest].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "white",
                  bgcolor: "darkred",
                  m: 0.5,
                  "&:hover": { bgcolor: "red" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "white", mt: 3 }}
        >
          Copyright © 2025 Bloodlink. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
