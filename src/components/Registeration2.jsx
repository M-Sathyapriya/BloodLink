import React, { useState } from 'react';
import {
  Button,
  MenuItem,
  TextField,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

// Extended States and Cities
const stateCityMap = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati', 'Kurnool'],
  'Arunachal Pradesh': ['Itanagar', 'Ziro', 'Tawang', 'Bomdila', 'Pasighat'],
  Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Tezpur', 'Jorhat'],
  Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
  'Chhattisgarh': ['Raipur', 'Bilaspur', 'Durg', 'Korba', 'Rajnandgaon'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini', 'Saket', 'Janakpuri'],
  Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
  Haryana: ['Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Hisar'],
  'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Kullu'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
  Karnataka: ['Bengaluru', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
  Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Alappuzha'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
  Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Puri'],
  Punjab: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
  Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tirunelveli'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Noida', 'Varanasi', 'Agra', 'Meerut'],
  Uttarakhand: ['Dehradun', 'Haridwar', 'Nainital', 'Haldwani', 'Rishikesh'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'],
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Pincode must be 6 digits')
    .required('Pincode is required'),
});

const textFieldBlackFocusSx = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
};

const RegistrationForm2 = () => {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate(); // ✅ For navigation

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      state: '',
      city: '',
      address: '',
      pincode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Contact Form Data:', values);
      navigate('/RegistrationForm3'); // ✅ Navigate to RegistrationForm3
    },
  });

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    formik.setFieldValue('state', selectedState);
    formik.setFieldValue('city', '');
    setCities(stateCityMap[selectedState] || []);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        sx={{ borderBottom: '2px solid #a00', mb: 2 }}
      >
        Registration Form
      </Typography>
      <Typography variant="h6" color="#a00" gutterBottom>
        Contact Information:
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email *"
              fullWidth
              sx={textFieldBlackFocusSx}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone Number *"
              fullWidth
              inputProps={{ maxLength: 10 }}
              sx={textFieldBlackFocusSx}
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="state"
              label="State *"
              fullWidth
              sx={textFieldBlackFocusSx}
              value={formik.values.state}
              onChange={handleStateChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            >
              {Object.keys(stateCityMap).map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="city"
              label="City *"
              fullWidth
              sx={textFieldBlackFocusSx}
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              disabled={!formik.values.state}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address *"
              fullWidth
              multiline
              minRows={3}
              sx={textFieldBlackFocusSx}
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="pincode"
              label="Pincode *"
              fullWidth
              inputProps={{ maxLength: 6 }}
              sx={textFieldBlackFocusSx}
              value={formik.values.pincode}
              onChange={formik.handleChange}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#a00',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#800000',
                },
                paddingY: 1.2,
                fontWeight: 'bold',
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RegistrationForm2;
