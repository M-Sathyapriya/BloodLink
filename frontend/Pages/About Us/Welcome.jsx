import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import doctorImage from "../../Assets/aboutus2.png"; // ✅ Main image
import labImage from "../../Assets/aboutus6.png"; // ✅ Circular image

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        maxWidth="lg"
        sx={{ flexWrap: "wrap" }}
      >
        {/* Left Image Section */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          {/* Main Image */}
          <Box
            component="img"
            src={doctorImage}
            alt="Doctors"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />

          {/* Circular Overlay Image - Moved to Middle Right */}
          <Box
            component="img"
            src={labImage}
            alt="Lab"
            sx={{
              position: "absolute",
              top: "50%", // ✅ Center vertically
              right: -30, // ✅ Slightly outside main image for modern look
              transform: "translateY(-50%)", // ✅ Perfect vertical centering
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: "6px solid #fff",
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              bgcolor: "#fff",
            }}
          />
        </Grid>

        {/* Right Text Section */}
        <Grid item xs={12} md={6}>
          {/* Small Heading */}
          <Typography
            variant="subtitle1"
            sx={{ color: "red", fontWeight: "500", mb: 1 }}
          >
            Help The People In Need
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
              lineHeight: 1.3,
            }}
          >
            Welcome to Blood <br /> Donors Organization
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{ color: "#333", mb: 3, lineHeight: 1.6 }}
          >
            Welcome to Blood Donors Organization where giving is a lifeline
            bringing hope and saving lives together we make every drop count
          </Typography>

          {/* Two-column list */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <List dense>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Good Service" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help people" />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hygiene" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={6}>
              <List dense>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="24h Service" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Health Check" />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: "30px", color: "red" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Blood Bank" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#b50000",
              borderRadius: "50px",
              textTransform: "none",
              px: 4,
              py: 1.2,
              fontWeight: "bold",
              fontSize: "1rem",
              mt: 3,
              "&:hover": { backgroundColor: "#900000" },
            }}
          >
            Explore Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeSection;
