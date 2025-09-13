import BloodRequest from "../Models/BloodRequest.js";

// Create (Submit) blood request
export const submitBloodRequest = async (req, res) => {
  try {
    console.log("📥 Received Payload:", req.body);

    const newRequest = new BloodRequest({
      patientName: {
        first: req.body.patientName?.first,
        mid: req.body.patientName?.mid,
        last: req.body.patientName?.last,
      },
      attendee: {
        first: req.body.attendee?.first,
        mid: req.body.attendee?.mid,
        last: req.body.attendee?.last,
        email: req.body.attendee?.email,
        phone: req.body.attendee?.phone,
      },
      bloodGroup: req.body.bloodGroup,
      requiredDate: req.body.requiredDate,
      quantity: req.body.quantity,
      requestType: req.body.requestType,
      state: req.body.state,
      city: req.body.city,
      hospitalName: req.body.hospitalName,
      hospitalAddress: req.body.hospitalAddress,
      pincode: req.body.pincode,
      urgency: req.body.urgency,
      note: req.body.note,
    });

    await newRequest.save();
    res.status(201).json({ message: "Blood request submitted successfully" });
  } catch (error) {
    console.error("❌ Error submitting blood request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all requests
export const getAllBloodRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("❌ Error fetching blood requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update request
export const updateBloodRequest = async (req, res) => {
  try {
    const updated = await BloodRequest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Request not found" });
    res.status(200).json({ message: "Request updated", request: updated });
  } catch (error) {
    console.error("❌ Error updating blood request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete request
export const deleteBloodRequest = async (req, res) => {
  try {
    const deleted = await BloodRequest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Request not found" });
    res.status(200).json({ message: "Request deleted" });
  } catch (error) {
    console.error("❌ Error deleting blood request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
