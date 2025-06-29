const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        message: "Access token is required",
        error: "No token provided"
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find the user
    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({
        message: "Invalid token or user not found",
        error: "User authentication failed"
      });
    }

    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token",
        error: "Token verification failed"
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired",
        error: "Please login again"
      });
    } else {
      return res.status(500).json({
        message: "Authentication error",
        error: error.message
      });
    }
  }
};

module.exports = { authenticateToken };
