import User from "../Models/registrationModel.js";
import bcrypt from "bcryptjs";

// Registration Controller
export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      midName,
      lastName,
      fatherName,
      maritalStatus,
      dob,
      gender,
      bloodGroup,
      aadhaar,
      email,
      phone,
      state,
      city,
      address,
      pincode,
      role,
      password,
    } = req.body;

    // Check if email or Aadhaar already exists
    const existingUser = await User.findOne({ $or: [{ email }, { aadhaar }] });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      midName,
      lastName,
      fatherName,
      maritalStatus,
      dob,
      gender,
      bloodGroup,
      aadhaar,
      email,
      phone,
      state,
      city,
      address,
      pincode,
      role,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Controller
export const loginUser = async (req, res) => {
  try {
    const { emailOrPhone, password, role } = req.body;

    if (!emailOrPhone || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please provide email/phone, password, and role" });
    }

    // Find user by email or phone AND role
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
      role,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found or role mismatch" });
    }

    // Validate password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Respond with user data (without password)
    res.status(200).json({
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.phone,
      bloodGroup: user.bloodGroup,
      role: user.role,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
