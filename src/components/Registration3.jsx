import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box, Button, MenuItem, TextField, Typography, Paper,
  FormControlLabel, Checkbox, Link, FormHelperText
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // ✅ Navigation hook

const roles = ["Donor", "Receiver", "Admin"];

function generateCaptchaText(length = 6) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

const textFieldBlackFocusSx = {
  "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "black" } },
  "& .MuiInputLabel-root.Mui-focused": { color: "black" },
};

const RegistrationForm3 = () => {
  const [captchaText, setCaptchaText] = useState("");
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // ✅ Used for redirection

  const regenerateCaptcha = () => setCaptchaText(generateCaptchaText(6));

  useEffect(() => { regenerateCaptcha(); }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const width = 180, height = 40;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffeaea";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(177, 39, 39, ${Math.random() * 0.3 + 0.2})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    ctx.font = "22px Arial";
    ctx.fillStyle = "#b12727";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (let i = 0; i < captchaText.length; i++) {
      const char = captchaText.charAt(i);
      const x = 15 + i * 20;
      const y = height / 2 + (Math.random() * 6 - 3);
      const angle = Math.random() * 0.3 - 0.15;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  }, [captchaText]);

  const validationSchema = Yup.object({
    role: Yup.string().required("Role is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    captchaInput: Yup.string()
      .required("Captcha is required")
      .test("captcha-match", "Captcha does not match", value =>
        value?.toLowerCase() === captchaText.toLowerCase()
      ),
    termsChecked: Yup.boolean()
      .oneOf([true], "You must agree to terms and conditions")
      .required("Terms must be accepted"),
  });

  const formik = useFormik({
    initialValues: {
      role: "Donor",
      password: "",
      confirmPassword: "",
      captchaInput: "",
      termsChecked: false,
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        const form1 = JSON.parse(localStorage.getItem("registrationForm1")) || {};
        const form2 = JSON.parse(localStorage.getItem("registrationForm2")) || {};
        const fullData = {
          ...form1,
          ...form2,
          role: values.role,
          password: values.password,
        };

        await axios.post("http://localhost:3001/api/registration/register", fullData);
        alert("✅ Registration Successful!");

        resetForm();
        localStorage.clear();

        // ✅ Conditional Navigation Based on Role
        if (values.role === "Donor") {
          navigate("/Donorlogin");
        } else if (values.role === "Receiver") {
          navigate("/Recipientlogin");
        } else {
          navigate("/"); // Fallback
        }

      } catch (err) {
        alert(err.response?.data?.message || "❌ Registration Failed");
      }
    },
  });

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        borderRadius: 2,
        border: "1px solid #ccc",
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={3}
        sx={{
          borderBottom: "2px solid #b12727",
          display: "inline-block",
          pb: 0.5,
        }}
      >
        Registration Form
      </Typography>

      <Typography
        variant="subtitle1"
        color="#b12727"
        fontWeight="500"
        mb={2}
      >
        Login Credentials:
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          select
          name="role"
          label="Role *"
          fullWidth
          margin="normal"
          sx={textFieldBlackFocusSx}
          value={formik.values.role}
          onChange={formik.handleChange}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          {roles.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="password"
          name="password"
          label="Password *"
          fullWidth
          margin="normal"
          sx={textFieldBlackFocusSx}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          type="password"
          name="confirmPassword"
          label="Confirm Password *"
          fullWidth
          margin="normal"
          sx={textFieldBlackFocusSx}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />

        <Box mt={2} mb={1} display="flex" alignItems="center">
          <canvas
            ref={canvasRef}
            width={180}
            height={40}
            style={{ border: "1px solid #ccc", marginRight: 10 }}
          />
          <Button variant="outlined" color="error" onClick={regenerateCaptcha}>
            Refresh
          </Button>
        </Box>

        <TextField
          name="captchaInput"
          label="Enter Captcha *"
          fullWidth
          margin="normal"
          sx={textFieldBlackFocusSx}
          value={formik.values.captchaInput}
          onChange={formik.handleChange}
          error={formik.touched.captchaInput && Boolean(formik.errors.captchaInput)}
          helperText={formik.touched.captchaInput && formik.errors.captchaInput}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="termsChecked"
              checked={formik.values.termsChecked}
              onChange={formik.handleChange}
            />
          }
          label={
            <Typography fontSize={14}>
              I agree to <Link href="#">Terms and Conditions</Link> *
            </Typography>
          }
        />
        {formik.touched.termsChecked && formik.errors.termsChecked && (
          <FormHelperText error>{formik.errors.termsChecked}</FormHelperText>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: "#b12727",
            "&:hover": { backgroundColor: "#800000" },
          }}
        >
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default RegistrationForm3;
