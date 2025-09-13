// controllers/donationController.js
import Donation from "../Models/donationModels.js";

// ✅ Create Donation
export const submitDonation = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      bloodGroup,
      contact,
      email,
      donationDate,
      location,
      units,
    } = req.body;

    if (
      !name ||
      !age ||
      age <= 4 ||
      !gender ||
      !bloodGroup ||
      !contact ||
      !email ||
      !donationDate ||
      !location ||
      !units
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields correctly." });
    }

    const newDonation = new Donation({
      name,
      age,
      gender,
      bloodGroup,
      contact,
      email,
      donationDate,
      location,
      units,
    });

    await newDonation.save();

    res.status(201).json({
      message: "Donation submitted successfully",
      donation: newDonation,
    });
  } catch (error) {
    console.error("Error submitting donation:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// ✅ Get All Donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Update Donation (Edit)
export const updateDonation = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDonation = await Donation.findByIdAndUpdate(id, req.body, {
      new: true, // returns updated document
      runValidators: true, // ensures validation rules are applied
    });

    if (!updatedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json({
      message: "Donation updated successfully",
      donation: updatedDonation,
    });
  } catch (error) {
    console.error("Error updating donation:", error);
    res.status(500).json({ message: "Failed to update donation" });
  }
};

// ✅ Delete Donation
export const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDonation = await Donation.findByIdAndDelete(id);

    if (!deletedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (error) {
    console.error("Error deleting donation:", error);
    res.status(500).json({ message: "Failed to delete donation" });
  }
};
