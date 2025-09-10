import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: 1000,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3, // slight shadow for card effect
        }}
      >
        {/* LEFT SIDE - CONTACT FORM */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: "#ffffff", // pure white
              height: "100%",
            }}
          >
            {/* Heading */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Get in Touch
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms
            </Typography>

            {/* Form Fields */}
            <Grid container spacing={2}>
              {/* Row 1 - First Name & Last Name */}
              <Grid item xs={6}>
                <TextField fullWidth placeholder="First Name" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth placeholder="Last Name" variant="outlined" />
              </Grid>

              {/* Row 2 - Email & Subject */}
              <Grid item xs={6}>
                <TextField fullWidth placeholder="Email id" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth placeholder="Subject" variant="outlined" />
              </Grid>

              {/* Row 3 - Message */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>

            {/* Row 4 - Submit Button */}
            <Box mt={2}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#b71c1c",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "12px",
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#9b1b1b",
                  },
                }}
              >
                Submit Request
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT SIDE - BLOOD DONATE INFO */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              backgroundColor: "#b71c1c",
              color: "white",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Small Heading */}
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Blood Excellence!
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Expanded Blood Donate Services Here
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{ mb: 3, lineHeight: 1.6 }}
            >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms
            </Typography>

            {/* Emergency Line */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <PhoneIcon />
              <Typography variant="body1" fontWeight="medium">
                Emergency Line: (002) 012612457
              </Typography>
            </Stack>

            {/* Location */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <LocationOnIcon />
              <Typography variant="body1" fontWeight="medium">
                Location: Street 68, Mahattan, New York
              </Typography>
            </Stack>

            {/* Working Hours */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon />
              <Typography variant="body1" fontWeight="medium">
                Mon – Fri: 8:00 am – 7:00 pm
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
