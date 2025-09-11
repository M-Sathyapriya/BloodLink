import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 6, fontFamily: "Poppins, sans-serif" }}>
      {/* Effective Date Section */}
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Effective Date: 17-08-2024 <br />
        Last updated: 27-08-2025
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 3, textAlign: "center" }}
      >
        Privacy Policy For Blood Link
      </Typography>

      {/* Intro */}
      <Typography paragraph>
        At BloodLink, your privacy is important to us. We collect only the
        necessary personal information to connect blood donors with those in
        need. All data is kept secure, never shared without your consent, and
        used solely to improve your experience on our platform.
      </Typography>
      <Typography paragraph>
        By using BloodLink, you agree to our policies regarding the collection
        and use of your information.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Section 1 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        1. INFORMATION WE COLLECT:
      </Typography>
      <Typography paragraph>
        • <strong>Personal Data:</strong> Name, age, gender, blood group,
        contact info, email, location, and health-related data (if applicable).
        <br />
        • <strong>Non-Personal Data:</strong> IP address, browser type, device
        info, and site usage behavior.
      </Typography>

      {/* Section 2 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        2. HOW WE USE YOUR DATA:
      </Typography>
      <Typography paragraph>
        • We use your data to send urgent blood donation alerts, ensure timely
        communication between donors and recipients, and improve your
        connection with the community. <br />
        • Notifications and updates are sent based on your blood group, location
        and availability to maximize the impact. <br />
        • Your data helps us understand the healthcare needs in our area and
        enables us to continuously enhance user experience and match donors with
        recipients. <br />
        • We may use your information for secure logins, identity verification,
        and fraud prevention to keep the platform safe and trustworthy. <br />
        • We adhere strictly to healthcare regulations and legal standards,
        using donor data to comply with reporting requirements and ethical
        platform operation.
      </Typography>

      {/* Section 3 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        3. DATA SHARING:
      </Typography>
      <Typography paragraph>
        • We only share your data with verified blood banks, hospitals, and
        government-recognized organizations that are involved in blood donation
        and emergency services. <br />
        • If required by law to protect public safety, we may disclose user data
        strictly to authorities to protect individuals and medical emergencies
        while retaining health data. <br />
        • We do not sell or share your data for advertising, analytics, or
        communication tools from any cross data under contract with third
        parties for advertising. <br />
        • Under no circumstances is your personal information sold, rented, or
        shared with advertising platforms or unauthorized vendors.
      </Typography>

      {/* Section 4 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        4. DATA SECURITY:
      </Typography>
      <Typography paragraph>
        • Your information is encrypted using industry-standard SSL protocols
        during transmission and protected with secure storage on servers. <br />
        • Internal access is limited only to authorized personnel with necessary
        clearances, and all activity is logged to prevent unauthorized access.{" "}
        <br />
        • We run routine system monitoring, vulnerability scans, and security
        upgrades to guard against breaches, attacks, or data leaks. <br />
        • Backup systems are in place to restore data in case of accidental loss
        or disaster, ensuring continuous availability of services. <br />
        • All privacy and security protocols are reviewed periodically to align
        with evolving cyber protection guidelines and best practices.
      </Typography>

      {/* Section 5 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        5. COOKIES AND TRACKING:
      </Typography>
      <Typography paragraph>
        • Cookies are used to remember your login sessions, store user
        preferences, and help deliver a smoother user experience. <br />
        • We leverage first-party cookies, app pixels, and session depth to
        identify which parts of the platform need improvements and which are
        most engaging. <br />
        • Cookies are never used for unauthorized tracking or cross-site
        advertising. <br />
        • You can manage, block, or clear cookies anytime through your browser
        settings without losing access to our core services.
      </Typography>

      {/* Section 6 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        6. YOUR RIGHTS:
      </Typography>
      <Typography paragraph>
        You can: <br />• Request access or correction of your data <br />•
        Request data deletion <br />• Withdraw consent at any time <br />•
        Raise complaints to a data protection authority
      </Typography>

      {/* Section 7 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        7. POLICY UPDATES:
      </Typography>
      <Typography paragraph>
        We may revise this policy. Changes will be posted with a new effective
        date. Please check this page regularly.
      </Typography>

      {/* Contact */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions or concerns: <br />
        Email: help@bloodlink.com <br />
        Phone: +91-7894561008
      </Typography>
    </Container>
  );
}
