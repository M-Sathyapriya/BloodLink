import mongoose from "mongoose";

const bloodRequestSchema = new mongoose.Schema(
  {
    patientName: {
      first: { type: String, required: true },
      mid: { type: String },
      last: { type: String, required: true },
    },
    attendee: {
      first: { type: String, required: true },
      mid: { type: String },
      last: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    bloodGroup: { type: String, required: true },
    requiredDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    requestType: { type: String, enum: ["Blood", "Platelets", "Plasma"], required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    hospitalName: { type: String, required: true },
    hospitalAddress: { type: String, required: true },
    pincode: { type: String, required: true },
    urgency: { type: String, enum: ["Normal", "Urgent", "Critical"], required: true },
    note: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("BloodRequest", bloodRequestSchema);
