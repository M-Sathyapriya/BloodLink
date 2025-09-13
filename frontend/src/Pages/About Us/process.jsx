import React from "react";
import { Box, Typography } from "@mui/material";

const DonationProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Registration",
      description:
        "Become a Lifesaver. Share your basic details through our secure platform or app to join our donor community.",
      align: "left",
    },
    {
      id: "02",
      title: "Screening Test",
      description:
        "Our medical team checks your vitals like blood pressure, haemoglobin, and general fitness before donation.",
      align: "right",
    },
    {
      id: "03",
      title: "Donation",
      description:
        "The Life-Saving Moment. Comfortably donate blood under the supervision of qualified professionals in a safe, sterile environment.",
      align: "left",
    },
    {
      id: "04",
      title: "Rest & Refresh",
      description:
        "Refresh and Rejoice. Relax with refreshments, receive your donor certificate, and track the impact of your donation.",
      align: "right",
    },
  ];

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, textAlign: "center" }}>
      {/* Section Heading */}
      <Typography variant="subtitle1" sx={{ color: "red", fontWeight: 500 }}>
        What we Do
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Donation Process
      </Typography>

      {/* Timeline */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        {/* Vertical Dashed Line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            borderLeft: "2px dashed red",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        {steps.map((step) => (
          <Box
            key={step.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 50px 1fr", // left | circle | right
              alignItems: "center",
              width: "100%",
              position: "relative",
              zIndex: 1,
              gap: 2,
            }}
          >
            {/* Left Step */}
            {step.align === "left" ? (
              <Box
                sx={{
                  bgcolor: "red",
                  color: "#fff",
                  p: 2,
                  pr: 3,
                  borderRadius: "0 8px 8px 0",
                  justifySelf: "end",
                  maxWidth: { xs: "90%", md: "300px" },
                  textAlign: "left",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Box>
            ) : (
              <Box /> // Empty for spacing
            )}

            {/* Circle */}
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "#fff",
                border: "2px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#000",
                zIndex: 2,
              }}
            >
              {step.id}
            </Box>

            {/* Right Step */}
            {step.align === "right" ? (
              <Box
                sx={{
                  bgcolor: "red",
                  color: "#fff",
                  p: 2,
                  pl: 3,
                  borderRadius: "8px 0 0 8px",
                  justifySelf: "start",
                  maxWidth: { xs: "90%", md: "300px" },
                  textAlign: "left",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Box>
            ) : (
              <Box /> // Empty for spacing
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DonationProcess;
