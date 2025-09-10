import React from 'react';
<<<<<<< HEAD
import { Box, Typography,Link } from '@mui/material';
=======
import { Box, Typography, Link } from '@mui/material';
>>>>>>> Vishali
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import backgroundImg from './../../Assets/donationbanner.png'; // Use your image here

const DonationBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Red border container */}
      <Box
        sx={{
          border: '4px solid red',
          padding: 4,
          width: '80%',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          backgroundColor: 'rgba(0,0,0,0.4)', // Slight overlay for readability
        }}
      >
        {/* Red diamond icon container */}
        <Box
          sx={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            backgroundColor: 'red',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <PhoneIcon sx={{ color: 'white', transform: 'rotate(-45deg)' }} />
        </Box>

        <Typography variant="subtitle2" sx={{ mt: 3 }}>
          Start Donating
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', my: 1 }}>
          Call Now: 333 555 9090
        </Typography>

        {/* Address and Email */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <RoomIcon fontSize="small" />
            <Typography variant="body2">New York - 1075 Firs Avenue</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" />
            <Link href="mailto:Donate@gmail.com" color="inherit" underline="hover">
              Donate@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationBanner;
