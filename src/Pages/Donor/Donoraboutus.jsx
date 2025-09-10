import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import donateImage from "../../Assets/intro.png"; // check path

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px",
  height: "350px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "block",
});

const Dabout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 8,
        px:15,
        flexWrap: { xs: "wrap", md: "nowrap" }, // stack on mobile
      }}
    >
      {/* Left: Text */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          WHY DONATE BLOOD??
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Every two seconds, someone in the world needs blood. Yet, millions of
          patients die or suffer because they don’t have access to safe blood
          when they need it. Blood donation is one of the most selfless and
          impactful acts anyone can do.
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Who Can Donate?
        </Typography>
        <List sx={{
    pl: 4,
    listStyleType: "disc",
    "& .MuiListItem-root": {
      display: "list-item",
    },
  }}>
          <ListItem sx={{ py: 0 }}>
            <ListItemText primary="Age: 18–60 years" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            <ListItemText primary="Weight: Above 50 kg" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            <ListItemText primary="Hemoglobin: Above 12.5 g/dL" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            <ListItemText primary="Healthy and free of infectious diseases" />
          </ListItem>
        </List>
      </Box>

      {/* Right: Image */}
      <Box sx={{ flex: 1, textAlign: "right",display: "flex",justifyContent: "flex-end", pr: 3 }}>
        <StyledImage src={donateImage} alt="Blood Donation" />
      </Box>
    </Box>
  );
};

export default Dabout;
