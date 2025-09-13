// RequestBloodForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material";

// Dropdown Options
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const requestTypes = ["Blood", "Platelets", "Plasma"];
const urgencyLevels = ["Normal", "Urgent", "Critical"];
const states = ["Tamil Nadu", "Kerala", "Karnataka"];
const cities = ["Chennai", "Coimbatore", "Madurai"];

const RequestBloodForm = () => {
  const [formData, setFormData] = useState({
    patientFirst: "",
    patientMid: "",
    patientLast: "",
    attendeeFirst: "",
    attendeeMid: "",
    attendeeLast: "",
    attendeeEmail: "",
    attendeePhone: "",
    bloodGroup: "",
    requiredDate: "",
    quantity: "",
    requestType: "",
    state: "",
    city: "",
    hospitalName: "",
    hospitalAddress: "",
    pincode: "",
    urgency: "",
    note: "",
    captchaInput: "",
    agree: false,
  });

  const [captcha, setCaptcha] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Generate Captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    let temp = {};
    temp.patientFirst = formData.patientFirst ? "" : "First name is required";
    temp.patientLast = formData.patientLast ? "" : "Last name is required";
    temp.attendeeFirst = formData.attendeeFirst ? "" : "First name is required";
    temp.attendeeLast = formData.attendeeLast ? "" : "Last name is required";
    temp.attendeeEmail = /\S+@\S+\.\S+/.test(formData.attendeeEmail)
      ? ""
      : "Enter valid email";
    temp.attendeePhone =
      formData.attendeePhone.length === 10 ? "" : "Enter valid phone";
    temp.bloodGroup = formData.bloodGroup ? "" : "Blood group is required";
    temp.requiredDate = formData.requiredDate ? "" : "Required date is required";
    temp.quantity =
      formData.quantity && Number(formData.quantity) > 0
        ? ""
        : "Quantity must be greater than 0";
    temp.requestType = formData.requestType ? "" : "Request type is required";
    temp.state = formData.state ? "" : "State is required";
    temp.city = formData.city ? "" : "City is required";
    temp.hospitalName = formData.hospitalName ? "" : "Hospital name is required";
    temp.hospitalAddress = formData.hospitalAddress
      ? ""
      : "Hospital address is required";
    temp.pincode = formData.pincode ? "" : "Pincode is required";
    temp.urgency = formData.urgency ? "" : "Urgency level is required";
    temp.captchaInput =
      formData.captchaInput === captcha ? "" : "Captcha does not match";
    temp.agree = formData.agree ? "" : "You must agree to continue";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        // ✅ Transform data to match backend schema
        const payload = {
          patientName: {
            first: formData.patientFirst,
            mid: formData.patientMid,
            last: formData.patientLast,
          },
          attendee: {
            first: formData.attendeeFirst,
            mid: formData.attendeeMid,
            last: formData.attendeeLast,
            email: formData.attendeeEmail,
            phone: formData.attendeePhone,
          },
          bloodGroup: formData.bloodGroup,
          requiredDate: formData.requiredDate,
          quantity: Number(formData.quantity),
          requestType: formData.requestType,
          state: formData.state,
          city: formData.city,
          hospitalName: formData.hospitalName,
          hospitalAddress: formData.hospitalAddress,
          pincode: formData.pincode,
          urgency: formData.urgency,
          note: formData.note,
        };

        const response = await axios.post(
          "http://localhost:3001/api/request-blood/submit",
          payload
        );

        if (response.status === 201 || response.status === 200) {
          setSuccess(true);
          // Reset form after successful submission
          setFormData({
            patientFirst: "",
            patientMid: "",
            patientLast: "",
            attendeeFirst: "",
            attendeeMid: "",
            attendeeLast: "",
            attendeeEmail: "",
            attendeePhone: "",
            bloodGroup: "",
            requiredDate: "",
            quantity: "",
            requestType: "",
            state: "",
            city: "",
            hospitalName: "",
            hospitalAddress: "",
            pincode: "",
            urgency: "",
            note: "",
            captchaInput: "",
            agree: false,
          });
          generateCaptcha();
        }
      } catch (error) {
        console.error("❌ Error submitting blood request:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontWeight: "bold",
          borderBottom: "2px solid #900",
          pb: 1,
          mb: 2,
        }}
      >
        Request For Blood
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Patient Name */}
          <Grid item xs={4}>
            <Typography variant="body2">Patient Name *</Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              {["patientFirst", "patientMid", "patientLast"].map((field, i) => (
                <Grid item xs={4} key={field}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder={["First Name", "Mid Name", "Last Name"][i]}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    error={
                      (field === "patientFirst" && !!errors.patientFirst) ||
                      (field === "patientLast" && !!errors.patientLast)
                    }
                    helperText={
                      (field === "patientFirst" && errors.patientFirst) ||
                      (field === "patientLast" && errors.patientLast)
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Attendee Name */}
          <Grid item xs={4}>
            <Typography variant="body2">Attendee Name *</Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              {["attendeeFirst", "attendeeMid", "attendeeLast"].map(
                (field, i) => (
                  <Grid item xs={4} key={field}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder={["First Name", "Mid Name", "Last Name"][i]}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      error={
                        (field === "attendeeFirst" && !!errors.attendeeFirst) ||
                        (field === "attendeeLast" && !!errors.attendeeLast)
                      }
                      helperText={
                        (field === "attendeeFirst" && errors.attendeeFirst) ||
                        (field === "attendeeLast" && errors.attendeeLast)
                      }
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>

          {/* Attendee Email */}
          <Grid item xs={4}>
            <Typography variant="body2">Attendee Email *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Email"
              name="attendeeEmail"
              value={formData.attendeeEmail}
              onChange={handleChange}
              error={!!errors.attendeeEmail}
              helperText={errors.attendeeEmail}
            />
          </Grid>

          {/* Attendee Phone */}
          <Grid item xs={4}>
            <Typography variant="body2">Attendee Phone Number *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Phone No"
              name="attendeePhone"
              value={formData.attendeePhone}
              onChange={handleChange}
              error={!!errors.attendeePhone}
              helperText={errors.attendeePhone}
            />
          </Grid>

          {/* Blood Group */}
          <Grid item xs={4}>
            <Typography variant="body2">Blood Group Needed *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              error={!!errors.bloodGroup}
              helperText={errors.bloodGroup}
            >
              {bloodGroups.map((bg) => (
                <MenuItem key={bg} value={bg}>
                  {bg}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Required Date */}
          <Grid item xs={4}>
            <Typography variant="body2">Required Date *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              type="date"
              size="small"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.requiredDate}
              helperText={errors.requiredDate}
            />
          </Grid>

          {/* Quantity */}
          <Grid item xs={4}>
            <Typography variant="body2">Quantity *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="No Of Units Needed"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              error={!!errors.quantity}
              helperText={errors.quantity}
            />
          </Grid>

          {/* Request Type */}
          <Grid item xs={4}>
            <Typography variant="body2">Request Type *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              error={!!errors.requestType}
              helperText={errors.requestType}
            >
              {requestTypes.map((rt) => (
                <MenuItem key={rt} value={rt}>
                  {rt}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* State */}
          <Grid item xs={4}>
            <Typography variant="body2">State *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="state"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
            >
              {states.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* City */}
          <Grid item xs={4}>
            <Typography variant="body2">City *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            >
              {cities.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Hospital Name */}
          <Grid item xs={4}>
            <Typography variant="body2">Hospital Name *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Hospital Name"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              error={!!errors.hospitalName}
              helperText={errors.hospitalName}
            />
          </Grid>

          {/* Hospital Address */}
          <Grid item xs={4}>
            <Typography variant="body2">Hospital Address *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Hospital Address"
              name="hospitalAddress"
              value={formData.hospitalAddress}
              onChange={handleChange}
              error={!!errors.hospitalAddress}
              helperText={errors.hospitalAddress}
            />
          </Grid>

          {/* Pincode */}
          <Grid item xs={4}>
            <Typography variant="body2">Pincode *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              error={!!errors.pincode}
              helperText={errors.pincode}
            />
          </Grid>

          {/* Urgency */}
          <Grid item xs={4}>
            <Typography variant="body2">Urgency *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              error={!!errors.urgency}
              helperText={errors.urgency}
            >
              {urgencyLevels.map((u) => (
                <MenuItem key={u} value={u}>
                  {u}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Note */}
          <Grid item xs={4}>
            <Typography variant="body2">Note (Optional)</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Any additional information"
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
          </Grid>

          {/* Captcha */}
          <Grid item xs={4}>
            <Typography variant="body2">Captcha *</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                padding: "5px 15px",
                border: "1px solid #ccc",
                fontWeight: "bold",
                letterSpacing: "4px",
                fontSize: "1.2rem",
                userSelect: "none",
                backgroundColor: "#f4f4f4",
              }}
            >
              {captcha}
            </Box>
            <TextField
              size="small"
              placeholder="Enter Captcha"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              error={!!errors.captchaInput}
              helperText={errors.captchaInput}
            />
            <Button variant="outlined" size="small" onClick={generateCaptcha}>
              Refresh
            </Button>
          </Grid>

          {/* Agree Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                  color="primary"
                />
              }
              label="I agree to the terms and conditions"
            />
            {errors.agree && (
              <Typography variant="caption" color="error" display="block">
                {errors.agree}
              </Typography>
            )}
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" type="submit">
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Blood request submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RequestBloodForm;
