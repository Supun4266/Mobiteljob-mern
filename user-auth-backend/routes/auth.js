const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const { register, login, getProfile, logout } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { 
  validateRegistration, 
  validateLogin, 
  handleValidationErrors 
} = require('../middleware/validation');

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    message: 'Too many authentication attempts',
    error: 'Please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false
});

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 registration attempts per hour
  message: {
    message: 'Too many registration attempts',
    error: 'Please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// POST /api/register - Register a new user
router.post('/register', 
  registerLimiter,
  validateRegistration,
  handleValidationErrors,
  register
);

// POST /api/login - Login user
router.post('/login',
  authLimiter,
  validateLogin,
  handleValidationErrors,
  login
);

// GET /api/profile - Get user profile (protected route)
router.get('/profile',
  authenticateToken,
  getProfile
);

// POST /api/logout - Logout user (protected route)
router.post('/logout',
  authenticateToken,
  logout
);

module.exports = router;
