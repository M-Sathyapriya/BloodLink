import React, { useState } from "react";
import { Box, Button } from "@mui/material";

export default function SocialButtons() {
  const [active, setActive] = useState(null);

  const buttons = ["Facebook", "Twitter", "Google Plus", "Pinterest"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 12, // spacing between buttons
        my: 4,
      }}
    >
      {buttons.map((label, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => setActive(index)}
          sx={{
            width: 250, // increased width
            bgcolor: active === index ? "#a30000" : "darkred",
            textTransform: "none",
            px: 4,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: active === index ? "#800000" : "#a30000",
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
