import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { VerifiedUser, MedicalServices, EmojiEvents, Group } from '@mui/icons-material';
import count from './../../Assets/count.png';

const StatsSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${count})`,  // <-- Correct usage here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 20px',
        color: 'white',
      }}
    >
      <Grid container justifyContent="center" spacing={8}>
        <Grid item xs={6} md={3} textAlign="center">
          <VerifiedUser sx={{ color: 'red', fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">25</Typography>
          <Typography variant="subtitle2" fontWeight="bold">Years of Experience</Typography>
        </Grid>

        <Grid item xs={6} md={3} textAlign="center">
          <MedicalServices sx={{ color: 'red', fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">3225</Typography>
          <Typography variant="subtitle2" fontWeight="bold">Happy Donors</Typography>
        </Grid>

        <Grid item xs={6} md={3} textAlign="center">
          <EmojiEvents sx={{ color: 'red', fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">90</Typography>
          <Typography variant="subtitle2" fontWeight="bold">Total Awards</Typography>
        </Grid>

        <Grid item xs={6} md={3} textAlign="center">
          <Group sx={{ color: 'red', fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">3168</Typography>
          <Typography variant="subtitle2" fontWeight="bold">Happy Recipient</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsSection;
