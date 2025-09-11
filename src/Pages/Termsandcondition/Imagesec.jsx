import React from "react";
import { Box } from "@mui/material";
import image1 from "../../Assets/Terms2.png"; // ✅ Replace with your image path
import image2 from "../../Assets/Terms3.png"; // ✅ Replace with your image path

const TwoImagesRow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens
        justifyContent: "center",
        alignItems: "center",
        gap: 2, // space between images
        maxWidth: "90%",
        margin: "0 auto",
        mt: 4,
      }}
    >
      {/* Image 1 */}
      <Box
        component="img"
        src={image1}
        alt="Image 1"
        sx={{
          width: { xs: "100%", md: "50%" },
          borderRadius: "12px",
          objectFit: "cover",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />

      {/* Image 2 */}
      <Box
        component="img"
        src={image2}
        alt="Image 2"
        sx={{
          width: { xs: "100%", md: "50%" },
          borderRadius: "12px",
          objectFit: "cover",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
    </Box>
  );
};

export default TwoImagesRow;
