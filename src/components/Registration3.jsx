import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
};

const RegistrationForm3 = () => {
  const [captchaText, setCaptchaText] = useState("");
  const canvasRef = useRef(null);

  const regenerateCaptcha = () => {
    const newCaptcha = generateCaptchaText(6);
    setCaptchaText(newCaptcha);
  };

  useEffect(() => {
    regenerateCaptcha();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const width = 180;
    const height = 40;

    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = "#ffeaea";
    ctx.fillRect(0, 0, width, height);

    // Random lines for distortion
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(177, 39, 39, ${Math.random() * 0.3 + 0.2})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    // Draw captcha characters with rotation
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
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    captchaInput: Yup.string()
      .required("Captcha is required")
      .test("captcha-match", "Captcha does not match", function (value) {
        return value?.toLowerCase() === captchaText.toLowerCase();
      }),
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
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      alert("✅ Registration Successful!");
      resetForm();
      regenerateCaptcha();
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
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={3}
        sx={{ borderBottom: "2px solid #b12727", display: "inline-block", pb: 0.5 }}
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
          placeholder="At least 8 characters"
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
          placeholder="Password and Confirm Password Must be Same"
          fullWidth
          margin="normal"
          sx={textFieldBlackFocusSx}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />

        <Box display="flex" alignItems="center" gap={2} mt={2} mb={formik.errors.captchaInput ? 0 : 2}>
          <canvas
            ref={canvasRef}
            width={140}
            height={40}
            style={{ borderRadius: 4, border: "1px solid #ddd", backgroundColor: "#fff0f0", cursor: "pointer" }}
            onClick={regenerateCaptcha}
            title="Click to refresh captcha"
          />
          <TextField
            name="captchaInput"
            label="Enter Captcha *"
            value={formik.values.captchaInput}
            onChange={formik.handleChange}
            error={formik.touched.captchaInput && Boolean(formik.errors.captchaInput)}
            helperText={
              (formik.touched.captchaInput && formik.errors.captchaInput) ||
              "Click captcha to refresh"
            }
            sx={{ flex: 1 }}
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              name="termsChecked"
              checked={formik.values.termsChecked}
              onChange={formik.handleChange}
              color="primary"
            />
          }
          label={
            <Typography variant="body2" color="textPrimary">
              I have read and agree the{" "}
              <Link href="#" underline="hover" color="#b12727">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" underline="hover" color="#b12727">
                Privacy Policy
              </Link>
            </Typography>
          }
        />
        {formik.touched.termsChecked && formik.errors.termsChecked && (
          <FormHelperText error>{formik.errors.termsChecked}</FormHelperText>
        )}

        <Box textAlign="center" mt={4}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#b12727",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "medium",
              "&:hover": {
                backgroundColor: "#8b1b1b",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default RegistrationForm3;
