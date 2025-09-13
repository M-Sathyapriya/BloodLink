import React from 'react';
import { Box, Typography, Grid, Avatar, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

//  Import images
import RahulImg from './../../Assets/rahul.png';
import AnjaliImg from './../../Assets/anjali.png';
import DrKarthikImg from './../../Assets/drkarthik.png';

//  Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Rahul S',
    location: 'Chennai',
    image: RahulImg,
    rating: 5,
    comment:
      'I never imagined a simple blood donation could have such a big impact. BloodLink made the process easy, and now I donate regularly.',
  },
  {
    id: 2,
    name: 'Anjali M',
    location: 'Coimbatore',
    image: AnjaliImg,
    rating: 5,
    comment:
      'As a first-time donor, I was nervous. But the platform made everything smooth and easy to understand. I’m proud to be part of this cause.',
  },
  {
    id: 3,
    name: 'Dr. Karthik, Lifeline Hospital',
    location: 'Madurai',
    image: DrKarthikImg,
    rating: 5,
    comment:
      'Our hospital uses BloodLink regularly. The quick response and verified donors have made critical surgeries possible without delays.',
  },
];

//  Component
const Testimonials = () => {
  return (
    <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="subtitle1" color="error" gutterBottom>
        Testimonial
      </Typography>

      <Typography variant="h5" fontWeight="bold" mb={6}>
        What Our Clients Says
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial.id}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 18px rgba(0,0,0,0.15)',
                },
              }}
            >
              {/* Rating */}
              <Box mb={2}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: '#FFD700' }} />
                ))}
              </Box>

              {/*  Comment */}
              <Typography variant="body1" mb={3} sx={{ fontStyle: 'italic' }}>
                “{testimonial.comment}”
              </Typography>

              {/*  User Info */}
              <Box mt="auto" display="flex" flexDirection="column" alignItems="center">
                <Avatar src={testimonial.image} sx={{ width: 56, height: 56, mb: 1 }} />
                <Typography variant="subtitle2">{testimonial.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  ~{testimonial.location}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
