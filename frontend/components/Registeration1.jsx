import React from 'react';
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
import { useNavigate } from "react-router-dom";  

const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
const genderOptions = ['Male', 'Female', 'Other'];
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  fatherName: Yup.string().required('Father/Husband name is required'),
  maritalStatus: Yup.string().required('Marital status is required'),
  dob: Yup.date().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  bloodGroup: Yup.string().required('Blood group is required'),
  aadhaar: Yup.string()
    .matches(/^[0-9]{12}$/, 'Aadhaar must be 12 digits')
    .required('Aadhaar number is required'),
});

const textFieldBlackFocusSx = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': { borderColor: 'black' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
};

const RegistrationForm1 = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      midName: '',
      lastName: '',
      fatherName: '',
      maritalStatus: '',
      dob: '',
      gender: '',
      bloodGroup: '',
      aadhaar: '',
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("registrationForm1", JSON.stringify(values));
      navigate("/RegistrationForm2");
    },
  });

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h5" align="center" fontWeight="bold" sx={{ borderBottom: '2px solid #a00', mb: 2 }}>
        Registration Form
      </Typography>
      <Typography variant="h6" color="#a00" gutterBottom>
        Personal Information:
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name="firstName" label="First Name *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.firstName} onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="midName" label="Mid Name" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.midName} onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="lastName" label="Last Name *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.lastName} onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="fatherName" label="Father/Husband Name *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.fatherName} onChange={formik.handleChange}
              error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
              helperText={formik.touched.fatherName && formik.errors.fatherName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select name="maritalStatus" label="Marital Status *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.maritalStatus} onChange={formik.handleChange}
              error={formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus)}
              helperText={formik.touched.maritalStatus && formik.errors.maritalStatus}
            >
              {maritalStatusOptions.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="dob" label="Date of Birth *" type="date" fullWidth InputLabelProps={{ shrink: true }}
              sx={textFieldBlackFocusSx} value={formik.values.dob} onChange={formik.handleChange}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select name="gender" label="Gender *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.gender} onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
            >
              {genderOptions.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select name="bloodGroup" label="Blood Group *" fullWidth sx={textFieldBlackFocusSx}
              value={formik.values.bloodGroup} onChange={formik.handleChange}
              error={formik.touched.bloodGroup && Boolean(formik.errors.bloodGroup)}
              helperText={formik.touched.bloodGroup && formik.errors.bloodGroup}
            >
              {bloodGroups.map(group => <MenuItem key={group} value={group}>{group}</MenuItem>)}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="aadhaar" label="Aadhaar Number *" fullWidth inputProps={{ maxLength: 12 }}
              sx={textFieldBlackFocusSx} value={formik.values.aadhaar} onChange={formik.handleChange}
              error={formik.touched.aadhaar && Boolean(formik.errors.aadhaar)}
              helperText={formik.touched.aadhaar && formik.errors.aadhaar}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth
              sx={{ backgroundColor: '#a00', color: '#fff', '&:hover': { backgroundColor: '#800000' }, paddingY: 1.2, fontWeight: 'bold' }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RegistrationForm1;
