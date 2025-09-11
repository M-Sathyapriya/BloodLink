import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is bloodlink ?",
    answer:
      "BloodLink is a platform that connects blood donors, recipients, hospitals, and blood banks to make blood donation easier and faster.",
  },
  {
    question: "How many days will it take to accept my request",
    answer:
      "Requests are usually processed within 1-2 days depending on donor availability and urgency of the case.",
  },
  {
    question: "Is it safe to donate blood?",
    answer:
      "Yes, donating blood is completely safe. All equipment used is sterile and disposable to ensure donor safety.",
  },
  {
    question: "How is blood stored?",
    answer:
      "Collected blood is stored in blood banks under strict medical conditions at controlled temperatures.",
  },
  {
    question: "What happens to the collected blood",
    answer:
      "The collected blood is tested, processed, and separated into components like plasma, platelets, and red cells before being given to patients.",
  },
  {
    question: "Who can donate blood",
    answer:
      "Healthy individuals aged 18–65, weighing at least 50kg, and meeting basic health criteria can donate blood.",
  },
];

const Questions = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", py: 6 }}>
      {/* Title */}
      <Typography
        variant="subtitle1"
        sx={{ color: "red", fontWeight: "bold", mb: 1 }}
      >
        FAQ'S
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 4, textDecoration: "underline" }}
      >
        FREQUENTLY ASKED QUESTION
      </Typography>

      {/* Accordion FAQ List */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            border: "1px solid black",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: "left" }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Questions;
