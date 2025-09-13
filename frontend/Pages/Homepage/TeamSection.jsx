import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

import sahanaImg from './../../Assets/volunteer1.jpg';
import rahulImg from './../../Assets/volunteer2.jpg';
import arjunImg from './../../Assets/volunteer3.jpg';

// Styled component for card zoom on hover
const ZoomCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: '0 auto',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',  // Slight zoom effect on entire card
    boxShadow: theme.shadows[6], // Optional: deeper shadow on hover
  },
}));

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sahana Iyer',
      title: 'Co-Founder',
      image: sahanaImg,
    },
    {
      name: 'Rahul Verma',
      title: 'Co-Founder',
      image: rahulImg,
    },
    {
      name: 'Arjun Das',
      title: 'Co-Founder',
      image: arjunImg,
    },
  ];

  return (
    <Box sx={{ py: 6, textAlign: 'center', backgroundColor: '#fff' }}>
      <Typography variant="subtitle1" color="error" fontWeight="bold" mb={1}>
        Team Members
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Meet Volunteers
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ZoomCard elevation={3}>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.title}
                </Typography>
              </CardContent>
            </ZoomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
