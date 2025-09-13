import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 5 },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    bloodGroup: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    donationDate: { type: Date, required: true },
    location: { type: String, required: true },
    units: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
