import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const StatsSection = () => {
  const stats = [
    { number: "25", label: "Years of Experience" },
    { number: "430", label: "Blood Donations" },
    { number: "90", label: "Total Awards" },
    { number: "35", label: "Blood Cooperations" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#b00000", // dark red background
        py: 6, // vertical padding
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography
              variant="h4"
              component="div"
              fontWeight="bold"
              color="white"
            >
              {item.number}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color="white"
              sx={{ mt: 1 }}
            >
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
