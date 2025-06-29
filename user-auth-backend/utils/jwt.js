const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
  const payload = {
    userId: userId,
    iat: Math.floor(Date.now() / 1000)
  };
  
  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN || "24h"
  };
  
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw error;
  }
};

// Decode JWT token without verification (for debugging)
const decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = {
  generateToken,
  verifyToken,
  decodeToken
};
