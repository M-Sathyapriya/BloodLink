// RequestBloodForm.jsx
import React, { useState, useEffect } from "react";
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
    temp.attendeeEmail = /\S+@\S+\.\S+/.test(formData.attendeeEmail)
      ? ""
      : "Enter valid email";
    temp.attendeePhone =
      formData.attendeePhone.length === 10 ? "" : "Enter valid phone";
    temp.captchaInput =
      formData.captchaInput === captcha ? "" : "Captcha does not match";
    temp.agree = formData.agree ? "" : "You must agree to continue";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
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
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    }}
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
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      }}
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
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "black",
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "black",
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "black",
                },
              }}
            >
              {bloodGroups.map((bg) => (
                <MenuItem key={bg} value={bg}>
                  {bg}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Date */}
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
              multiline
              rows={2}
              name="hospitalAddress"
              value={formData.hospitalAddress}
              onChange={handleChange}
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
            />
          </Grid>

          {/* Urgency */}
          <Grid item xs={4}>
            <Typography variant="body2">Urgency Level *</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              select
              fullWidth
              size="small"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
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
            <Typography variant="body2">Note to Donors</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              size="small"
              placeholder="Optional"
              multiline
              rows={2}
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
          </Grid>

          {/* Captcha */}
          <Grid item xs={4}>
            <Typography variant="body2">Captcha *</Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid
                item
                sx={{
                  p: 1,
                  border: "1px dashed gray",
                  fontWeight: "bold",
                  fontSize: "18px",
                  userSelect: "none",
                }}
              >
                {captcha}
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter Captcha"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  error={!!errors.captchaInput}
                  helperText={errors.captchaInput}
                />
              </Grid>
              <Grid item>
                <Button onClick={generateCaptcha}>↻</Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                />
              }
              label={
                <Typography variant="body2">
                  I have read and agree the{" "}
                  <span style={{ color: "red" }}>Terms & Conditions</span> and{" "}
                  <span style={{ color: "red" }}>Privacy Policy</span>
                </Typography>
              }
            />
            {errors.agree && (
              <Typography color="error" variant="caption">
                {errors.agree}
              </Typography>
            )}
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#b71c1c",
                "&:hover": { backgroundColor: "#900" },
                borderRadius: "20px",
              }}
            >
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success">Successfully Submitted!</Alert>
      </Snackbar>
    </Box>
  );
};

export default RequestBloodForm;
