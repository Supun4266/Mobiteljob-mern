const { body, validationResult } = require("express-validator");

// Validation rules for user registration
const validateRegistration = [
  body("userId")
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("User ID must be between 3 and 50 characters")
    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage("User ID can only contain letters, numbers, underscores, and hyphens"),
  
  body("name")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name can only contain letters and spaces"),
  
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
];

// Validation rules for user login
const validateLogin = [
  body("userId")
    .trim()
    .notEmpty()
    .withMessage("User ID is required"),
  
  body("password")
    .notEmpty()
    .withMessage("Password is required")
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => ({
      field: error.path,
      message: error.msg,
      value: error.value
    }));
    
    return res.status(400).json({
      message: "Validation failed",
      errors: errorMessages
    });
  }
  
  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  handleValidationErrors
};
