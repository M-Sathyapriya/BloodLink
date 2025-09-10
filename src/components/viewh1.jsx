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

const Devihospital = () => {
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
        Devi Hospital 
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
      <InfoItem label="Address" value="37WQ+839, Ayyappa Chetty St, tambaram\nChennai, Tamil Nadu 600001.\n(Private)" />
      <InfoItem label="Email" value="DeviHospital121@gmail.com" />
      <InfoItem label="City" value="Chennai-600001" />
      <InfoItem label="State" value="Tamil Nadu" />
      <InfoItem label="Pincode" value="600 001" />
      
    </Box>
  );
};

export default Devihospital;
