import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import bloodGroupImg from "../../Assets/aboutus3.png"; // ✅ Replace with your image
import freeCheckImg from "../../Assets/aboutus4.png"; // ✅ Replace with your image
import donationCampImg from "../../Assets/aboutus5.png"; // ✅ Replace with your image

const PopularCampaigns = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 6, px: { xs: 2, md: 8 } }}>
      {/* Section Title */}
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ color: "red", fontWeight: 500 }}
      >
        DONATE NOW
      </Typography>

      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 5,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Popular Campaigns
      </Typography>

      {/* Campaign Cards */}
      <Grid container spacing={3}>
        {/* Card 1 - Full Width */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={bloodGroupImg}
              alt="Blood Group Collection"
              sx={{ height: { xs: 250, md: 300 }, objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, fontFamily: "Poppins, sans-serif" }}
              >
                Blood Group Collection
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Blood Group Collection helps us organize and match donations accurately.
                Every blood type matters in saving lives at the right time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image={freeCheckImg}
              alt="Free Group Checking"
              sx={{ height: 180, objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "red", mb: 1 }}
              >
                18 Feb 2025
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Free Group Checking
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Know your blood type for free with our Group Checking service. One
                simple test can help save lives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image={donationCampImg}
              alt="Blood Donation Camp"
              sx={{ height: 180, objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "red", mb: 1 }}
              >
                18 Feb 2025
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Blood Donation Camp
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Join our Blood Donation Camp and be the reason someone lives.
                One place, one day, one powerful act of saving lives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularCampaigns;
