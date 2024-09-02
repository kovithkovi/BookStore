import User from "../model/user.model.js"; // Correct the import path
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const passwordHash = await bcryptjs.hash(password.toString(), 10); // Convert password to string

    const createdUser = new User({
      fullName: fullName,
      email: email,
      password: passwordHash, // Save the hashed password
    });

    await createdUser.save();
    res.status(200).json({
      message: "User successfully created",
      user: {
        email: email,
        fullName: fullName,
      },
    });
  } catch (e) {
    console.log("Error: " + e);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcryptjs.compare(password.toString(), user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }

    // If everything matches, login is successful
    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (e) {
    console.log("Error: " + e);
    res.status(500).json({ message: "Internal Server error" });
  }
};
