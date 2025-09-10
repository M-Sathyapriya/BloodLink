import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Local images
import donorImage from './../../Assets/donor1.jpg';
import bloodTestImage from './../../Assets/donor2.png';
import donationHelpImage from './../../Assets/donor3.jpg';

const cards = [
  {
    image: donorImage,
    icon: <OpacityIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Become a Donor',
    description: `Be the Lifeline Someone Needs
Join our community of life-savers. Just one donation can save up to three lives. Sign up and make a lasting difference today.`,
    bgColor: '#b71c1c',
  },
  {
    image: bloodTestImage,
    icon: <ScienceIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Why Give Blood?',
    description: `Because Every Drop Saves Lives
Blood cannot be manufactured—it can only come from generous donors like you. Your donation is the hope someone is waiting for.`,
    bgColor: '#b71c1c',
  },
  {
    image: donationHelpImage,
    icon: <FavoriteIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'How Donations Help?',
    description: `From Hospital Beds to Happy Smiles
Your blood donation helps accident victims, cancer patients, and those undergoing surgery. See how your kindness changes lives.`,
    bgColor: '#b71c1c',
  },
];

export default function BloodDonationcards() {
  return (
    <Box sx={{ p: 5, backgroundColor: '#fff' }}>
      <Grid container spacing={5} justifyContent="center">
        {cards.map(({ image, icon, title, description, bgColor }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 495,  // fixed height for all cards
                position: 'relative',
              }}
            >
              {/* Image on top */}
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: '100%',
                  height: 260,
                  objectFit: 'cover',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />

              {/* Icon overlapping image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 220,    // (image height 260) - (icon height 70) / 2 = ~220 to center overlap
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 70,
                  height: 70,
                  backgroundColor: bgColor,
                  borderRadius: 1,
                  boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                {icon}
              </Box>

              {/* Content */}
              <Box
                sx={{
                  p: 3,
                  pt: 7,  // extra padding top to clear icon overlap
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                }}
              >
                <Box>
                  {/* Title */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {description}
                  </Typography>
                </Box>

                {/* Button */}
                <Button
  variant="contained"
  sx={{
    backgroundColor: bgColor,
    textTransform: 'none',
    mt: 3,
    boxShadow: 'none',
    width: 'calc(100% + 48px)',  // make button wider than parent padding
    marginLeft: '-24px',
    marginRight: '-24px',
    '&:hover': {
      backgroundColor: '#7f0000',
      boxShadow: 'none',
    },
  }}
>
  Read More
</Button>

              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
