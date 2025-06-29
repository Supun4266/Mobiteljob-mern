const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

// Register a new user
const register = async (req, res) => {
  try {
    const { userId, name, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findByUserId(userId);
    if (existingUser) {
      return res.status(409).json({
        message: "User ID already exists",
        error: "Please choose a different User ID"
      });
    }

    // Create new user
    const newUser = new User({
      userId,
      name,
      password
    });

    // Save user to database
    await newUser.save();

    // Generate JWT token
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser.userId,
      token: token,
      user: {
        userId: newUser.userId,
        name: newUser.name,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error("Registration error:", error);
    
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => ({
        field: err.path,
        message: err.message
      }));
      
      return res.status(400).json({
        message: "Validation failed",
        errors: validationErrors
      });
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        message: `${field} already exists`,
        error: "Please choose a different value"
      });
    }

    res.status(500).json({
      message: "Internal server error",
      error: "Registration failed"
    });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Find user by userId
    const user = await User.findByUserId(userId);
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
        error: "User ID or password is incorrect"
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        message: "Account is deactivated",
        error: "Please contact support"
      });
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
        error: "User ID or password is incorrect"
      });
    }

    // Update last login
    await user.updateLastLogin();

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        userId: user.userId,
        name: user.name,
        lastLogin: user.lastLogin
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: "Login failed"
    });
  }
};

// Get user profile
const getProfile = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        isActive: user.isActive
      }
    });

  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: "Failed to retrieve profile"
    });
  }
};

// Logout user
const logout = async (req, res) => {
  try {
    res.status(200).json({
      message: "Logout successful"
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: "Logout failed"
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  logout
};
