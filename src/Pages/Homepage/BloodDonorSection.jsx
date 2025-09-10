import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import womanImage from "./../../Assets/help1.png"; // Replace with your image path
import doctorImage from "./../../Assets/help2.png"; // Replace with your image path

const BloodDonorSection = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: 6,
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left side images */}
      <Box sx={{ position: "relative", flex: 1, maxWidth: 320 }}>
        {/* Big image */}
        <Box
          component="img"
          src={womanImage}
          alt="Woman sitting"
          sx={{ width: "100%", borderRadius: 2, display: "block" }}
        />

        {/* Small circular image centered vertically and overlapping right edge */}
        <Box
          component="img"
          src={doctorImage}
          alt="Doctor"
          sx={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            border: "5px solid white",
            position: "absolute",
            top: "50%",
            right: -10, // half of width (110/2) to center on right edge
            transform: "translateY(-50%)",
            objectFit: "cover",
            boxShadow: "0 0 10px rgba(0,0,0,0.15)",
            backgroundColor: "#fff",
          }}
        />
      </Box>

      {/* Right side content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: "#A31F1F", fontWeight: "bold", mb: 1 }}
        >
          Help The People in Need
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.3 }}
        >
          Welcome to Blood <br /> Donors Organization
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: 420 }}
        >
          Your decision to donate can rewrite someone’s story. Join a community
          that saves lives every day through the power of a single act—donation.
          Together, we are stronger, kinder, and life–giving.
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Good Service" />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Help People" />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Hugine Tools" />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6}>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="24h Service" />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Health Check" />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: "#A31F1F" }}>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Blood Bank" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#A31F1F",
            textTransform: "none",
            fontWeight: "bold",
            px: 3,
            "&:hover": { backgroundColor: "#7a1515" },
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default BloodDonorSection;
