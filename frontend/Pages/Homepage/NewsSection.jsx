import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';

// Import your images here (replace with your actual imports)
import img1 from './../../Assets/news1.jpg';
import img2 from './../../Assets/news2.jpg'; // Replace with actual second image
import img3 from './../../Assets/news3.jpg'; // Replace with actual third image

const newsData = [
  {
    img: img1,
    date: '18 Feb 2025',
    comments: 3,
    title: 'Donation is hope for poor, helpless children.',
    desc: `For children fighting life-threatening illnesses, blood donation is a lifeline. Your gift gives them strength and hope for a healthy future.`,
  },
  {
    img: img2,
    date: '18 Feb 2025',
    comments: 3,
    title: 'Donation is life for accident victims.',
    desc: `For accident victims, blood donation is the spark that ignites survival. Your gift turns moments of crisis into stories of hope.`,
  },
  {
    img: img3,
    date: '18 Feb 2025',
    comments: 3,
    title: 'Donation is support for emergency care',
    desc: `Blood donation is the backbone of emergency care, powering swift action when lives hang in the balance.`,
  },
];

export default function NewsSection() {
  return (
    <Box sx={{ textAlign: 'center', mt: 5, px: 2 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'darkred' }}>
        Our news
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
        Check Out News And Updates
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={24}
        justifyContent="center"
        alignItems="stretch"
      >
        {newsData.map(({ img, date, comments, title, desc }, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 320,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt={title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'gray',
                  mb: 1,
                }}
              >
                <Typography>{date}</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="red"
                    viewBox="0 0 16 16"
                    style={{ marginRight: 4 }}
                  >
                    <path d="M8 1c-2.8 0-5 2.12-5 4.75C3 8.25 5.5 10 8 12.5 10.5 10 13 8.25 13 5.75 13 3.12 10.8 1 8 1z" />
                  </svg>
                  {comments} Comments
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                {desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
