import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: { xs: 2, sm: 4 },
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}
      >
        Terms and Conditions – Bloodlink
      </Typography>

      {/* Last Updated */}
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", color: "gray", mb: 3 }}
      >
        Last Updated: 27-05-2025
      </Typography>

      {/* Intro */}
      <Typography sx={{ mb: 3, fontSize: "16px" }}>
        Welcome to Bloodlink! These Terms and Conditions govern your access to
        and use of our platform, services, and information. Please read them
        carefully before registering or using any part of our website.
      </Typography>

      {/* Section 1 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. User Agreement:
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        By accessing or using Bloodlink, you agree to:
        <ul style={{ marginTop: "5px" }}>
          <li>Be at least 18 years old (or have parental consent if younger).</li>
          <li>Provide accurate, current, and complete personal information.</li>
          <li>
            Use the platform only for lawful, non-commercial purposes related to
            blood donation and awareness.
          </li>
          <li>Abide by all applicable laws and related regulations.</li>
        </ul>
      </Typography>

      {/* Section 2 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. Purpose of the Platform
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        Bloodlink connects voluntary blood donors with those in need and
        provides awareness, updates, and tools for safe and effective donation
        practices. Bloodlink does not perform any medical procedures and is not
        a healthcare provider.
      </Typography>

      {/* Section 3 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. Essential Rules for Donors and Requestors
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        <ul style={{ marginTop: "5px" }}>
          <li>Donors must ensure they meet health eligibility criteria before donating blood.</li>
          <li>Requestors must use the platform responsibly and truthfully when making a request.</li>
          <li>
            Abuse, fraudulent use, or misinformation will result in immediate
            termination of your account.
          </li>
          <li>No spam, harassment, or solicitation is allowed.</li>
        </ul>
      </Typography>

      {/* Section 4 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. Understanding Responsibilities
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        <ul style={{ marginTop: "5px" }}>
          <li>Bloodlink is not responsible for the outcome of a donation or the conduct of users.</li>
          <li>
            Users must consult a certified medical professional before donating
            or accepting blood.
          </li>
          <li>
            Bloodlink does not store or collect blood – it only facilitates
            connection between donors and recipients.
          </li>
        </ul>
      </Typography>

      {/* Section 5 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        5. Dealing System and Platform Usage
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        <ul style={{ marginTop: "5px" }}>
          <li>
            Bloodlink provides tools for inventory donors, book appointments,
            receive reminders, and read educational content.
          </li>
          <li>
            All information and donor eligibility details are community-driven;
            we allow only verified and independently verified content.
          </li>
          <li>
            Users must use the platform fairly, stay courteous, and never share
            private data without violating user privacy.
          </li>
        </ul>
      </Typography>

      {/* Section 6 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        6. Data Privacy and Security
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        <ul style={{ marginTop: "5px" }}>
          <li>Bloodlink values your privacy and follows best practices to protect your data.</li>
          <li>
            Your account information stays safe within Bloodlink; data is never
            sold to third parties.
          </li>
          <li>Read our Data Policy for full details.</li>
        </ul>
      </Typography>

      {/* Section 7 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        7. Termination of Use
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        We reserve the right to:
        <ul style={{ marginTop: "5px" }}>
          <li>Suspend or terminate user accounts that violate terms or misuse the platform.</li>
          <li>
            Take necessary action at our discretion, especially if safety or
            integrity is compromised.
          </li>
        </ul>
      </Typography>

      {/* Section 8 */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        8. Liability Disclaimer
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px" }}>
        <ul style={{ marginTop: "5px" }}>
          <li>Bloodlink is a facilitator, not a medical entity.</li>
          <li>
            We are not liable for physical, emotional, or financial damages
            arising from any donation, miscommunication, or user actions.
          </li>
        </ul>
      </Typography>

      <Divider sx={{ mt: 3 }} />
      <Typography
        sx={{ textAlign: "center", fontSize: "14px", color: "gray", mt: 2 }}
      >
        © {new Date().getFullYear()} Bloodlink. All rights reserved.
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
