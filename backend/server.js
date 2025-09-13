import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
import registrationRoutes from "./routes/registrationRoutes.js";
import bloodRequestRoutes from "./routes/bloodRequestRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";  // <-- New OTP routes

// Route Usage
app.use("/api/registration", registrationRoutes);         
app.use("/api/request-blood", bloodRequestRoutes);        
app.use("/api/donation", donationRoutes);                  
app.use("/api/otp", otpRoutes);                            // <-- Use OTP routes

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
