import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"];
const cities = ["Chennai", "Coimbatore", "Madurai", "Bangalore", "Hyderabad"];
const urgencyLevels = ["Critical", "High", "Medium", "Low"];

const validationSchema = Yup.object({
  patientFirst: Yup.string().required("Required"),
  attendeeFirst: Yup.string().required("Required"),
  attendeeEmail: Yup.string().email("Invalid email").required("Required"),
  attendeePhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit phone number")
    .required("Required"),
  bloodGroup: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  quantity: Yup.number().positive().integer().required("Required"),
  requestType: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  hospitalName: Yup.string().required("Required"),
  hospitalAddress: Yup.string().required("Required"),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Enter valid 6 digit pincode")
    .required("Required"),
  urgencyLevel: Yup.string().required("Required"),
  captcha: Yup.string().required("Required"),
  agree: Yup.boolean().oneOf([true], "You must agree to terms"),
});

const RequestBloodForm = () => {
  const formik = useFormik({
    initialValues: {
      patientFirst: "",
      patientMid: "",
      patientLast: "",
      attendeeFirst: "",
      attendeeMid: "",
      attendeeLast: "",
      attendeeEmail: "",
      attendeePhone: "",
      bloodGroup: "",
      date: "",
      quantity: "",
      requestType: "Blood",
      state: "",
      city: "",
      hospitalName: "",
      hospitalAddress: "",
      pincode: "",
      urgencyLevel: "Critical",
      note: "",
      captcha: "",
      agree: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Request For Blood
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Patient Name */}
          <Grid item xs={12}>
            <Typography variant="body2">Patient Name *</Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="patientFirst"
                  value={formik.values.patientFirst}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.patientFirst &&
                    Boolean(formik.errors.patientFirst)
                  }
                  helperText={
                    formik.touched.patientFirst && formik.errors.patientFirst
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Mid Name"
                  name="patientMid"
                  value={formik.values.patientMid}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="patientLast"
                  value={formik.values.patientLast}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Attendee Name */}
          <Grid item xs={12}>
            <Typography variant="body2">Attendee Name *</Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="attendeeFirst"
                  value={formik.values.attendeeFirst}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.attendeeFirst &&
                    Boolean(formik.errors.attendeeFirst)
                  }
                  helperText={
                    formik.touched.attendeeFirst && formik.errors.attendeeFirst
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Mid Name"
                  name="attendeeMid"
                  value={formik.values.attendeeMid}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="attendeeLast"
                  value={formik.values.attendeeLast}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Attendee Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Attendee Email"
              name="attendeeEmail"
              value={formik.values.attendeeEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.attendeeEmail &&
                Boolean(formik.errors.attendeeEmail)
              }
              helperText={
                formik.touched.attendeeEmail && formik.errors.attendeeEmail
              }
            />
          </Grid>

          {/* Attendee Phone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Attendee Phone Number"
              name="attendeePhone"
              value={formik.values.attendeePhone}
              onChange={formik.handleChange}
              error={
                formik.touched.attendeePhone &&
                Boolean(formik.errors.attendeePhone)
              }
              helperText={
                formik.touched.attendeePhone && formik.errors.attendeePhone
              }
            />
          </Grid>

          {/* Blood Group */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Blood Group Needed *</InputLabel>
              <Select
                name="bloodGroup"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
                error={
                  formik.touched.bloodGroup && Boolean(formik.errors.bloodGroup)
                }
              >
                {bloodGroups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.bloodGroup && formik.errors.bloodGroup}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* Required Date */}
          <Grid item xs={12}>
            <TextField
              type="date"
              fullWidth
              size="small"
              name="date"
              label="Required Date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>

          {/* Quantity */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="No Of Units Needed"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
            />
          </Grid>

          {/* Request Type */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Request Type *</InputLabel>
              <Select
                name="requestType"
                value={formik.values.requestType}
                onChange={formik.handleChange}
              >
                <MenuItem value="Blood">Blood</MenuItem>
                <MenuItem value="Plasma">Plasma</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* State */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>State *</InputLabel>
              <Select
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
              >
                {states.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.state && formik.errors.state}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* City */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>City *</InputLabel>
              <Select
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
              >
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.city && formik.errors.city}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* Hospital Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Hospital Name"
              name="hospitalName"
              value={formik.values.hospitalName}
              onChange={formik.handleChange}
              error={
                formik.touched.hospitalName &&
                Boolean(formik.errors.hospitalName)
              }
              helperText={
                formik.touched.hospitalName && formik.errors.hospitalName
              }
            />
          </Grid>

          {/* Hospital Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={2}
              label="Hospital Address"
              name="hospitalAddress"
              value={formik.values.hospitalAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.hospitalAddress &&
                Boolean(formik.errors.hospitalAddress)
              }
              helperText={
                formik.touched.hospitalAddress &&
                formik.errors.hospitalAddress
              }
            />
          </Grid>

          {/* Pincode */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Pincode"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid>

          {/* Urgency Level */}
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Urgency Level *</InputLabel>
              <Select
                name="urgencyLevel"
                value={formik.values.urgencyLevel}
                onChange={formik.handleChange}
              >
                {urgencyLevels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Note */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={2}
              label="Note to Donors"
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Captcha */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Captcha"
              name="captcha"
              value={formik.values.captcha}
              onChange={formik.handleChange}
              error={formik.touched.captcha && Boolean(formik.errors.captcha)}
              helperText={formik.touched.captcha && formik.errors.captcha}
            />
          </Grid>

          {/* Agree Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formik.values.agree}
                  onChange={formik.handleChange}
                />
              }
              label={
                <Typography variant="body2">
                  I have read and agree the{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>
                    Privacy Policy
                  </span>
                </Typography>
              }
            />
            {formik.touched.agree && formik.errors.agree && (
              <FormHelperText error>{formik.errors.agree}</FormHelperText>
            )}
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bgcolor: "red", "&:hover": { bgcolor: "darkred" } }}
            >
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RequestBloodForm;
