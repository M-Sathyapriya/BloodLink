// KGHospitalInfo.jsx

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const InfoItem = ({ label, value }) => (
  <Box mb={2}>
    <Typography fontWeight="bold" fontSize={16}>
      {label}
    </Typography>
    <Typography color="text.secondary" fontSize={14}>
      {value}
    </Typography>
  </Box>
);

const Corporation = () => {
  return (
    <Box
      maxWidth={500}
      mx="auto"
      p={4}
      sx={{ fontFamily: 'sans-serif' }}
    >
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        Chennai Corporation Hospital
      </Typography>

      <Divider
        sx={{
          width: 40,
          borderBottom: '2px solid red',
          mx: 'auto',
          mb: 4
        }}
      />

      <InfoItem label="Category" value="General Hospital" />
      <InfoItem label="Phone" value="+91 987654321" />
      <InfoItem label="Address" value="37Q4+CPJ, Kariyappa St, Perumalpet,\nPurasaiwakkam, Chennai,\nTamil Nadu 600007." />
      <InfoItem label="Email" value="chennaicorporationHospital@gmail.com" />
      <InfoItem label="City" value="Chennai-600001" />
      <InfoItem label="State" value="Tamil Nadu" />
      <InfoItem label="Pincode" value="600 007" />
     
    </Box>
  );
};

export default Corporation;
