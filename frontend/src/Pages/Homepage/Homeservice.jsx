import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // ✅ import Link

// Import images
import bloodDonationImg from "./../../Assets/s1.png";
import healthCheckImg from "./../../Assets/s2.png";
import bloodBankImg from "./../../Assets/s3.png";

const Services = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 1100, mx: "auto" }}>
      {/* Section Heading */}
      <Typography
        variant="body2"
        color="#A71D1D"
        textAlign="center"
        fontWeight={500}
        mb={1}
      >
        What We Do
      </Typography>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
        Our Best Services
      </Typography>

      {/* 01 - Blood Donation */}
      <Grid container spacing={6} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={bloodDonationImg}
            alt="Blood Donation"
            sx={{
              width: "100%",
              borderRadius: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#ddd" fontWeight={700} mb={1}>
            01
          </Typography>
          <Typography variant="h6" fontWeight={700} mb={1}>
            Blood Donation
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            Every drop counts. Our blood donation service ensures safe, easy,
            and impactful donations to save lives during emergencies and
            surgeries.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/DonateNow" // ✅ navigate to page
            sx={{
              bgcolor: "#A71D1D",
              textTransform: "none",
              minWidth: 120,
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>

      {/* 02 - Health Check */}
      <Grid container spacing={6} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#ddd" fontWeight={700} mb={1}>
            02
          </Typography>
          <Typography variant="h6" fontWeight={700} mb={1}>
            Health Check
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            Donors’ health is our first priority. We offer thorough health
            screening before every donation to ensure safety for both donor and recipient.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/hospital" // ✅ navigate to page
            sx={{
              bgcolor: "#A71D1D",
              textTransform: "none",
              minWidth: 120,
            }}
          >
            Read More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={healthCheckImg}
            alt="Health Check"
            sx={{
              width: "100%",
              borderRadius: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>

      {/* 03 - Blood Bank */}
      <Grid container spacing={6} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={bloodBankImg}
            alt="Blood Bank"
            sx={{
              width: "100%",
              borderRadius: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#ddd" fontWeight={700} mb={1}>
            03
          </Typography>
          <Typography variant="h6" fontWeight={700} mb={1}>
            Blood Bank
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            We maintain a well-organized blood bank with 24/7 access to
            different blood types, ready to serve hospitals and patients in need.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/bloodbank" // ✅ navigate to page
            sx={{
              bgcolor: "#A71D1D",
              textTransform: "none",
              minWidth: 120,
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
