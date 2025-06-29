require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/database");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration - Allow all origins for development
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Global rate limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: "Too many requests from this IP",
    error: "Please try again later"
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use(globalLimiter);

// Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// API routes
app.use("/api", authRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "User Authentication API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      register: "POST /api/register",
      login: "POST /api/login",
      profile: "GET /api/profile",
      logout: "POST /api/logout"
    }
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
    error: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);
  
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

  if (error.name === "CastError") {
    return res.status(400).json({
      message: "Invalid data format",
      error: "Please check your input data"
    });
  }

  if (error.name === "JsonWebTokenError") {
    return res.status(401).json({
      message: "Invalid token",
      error: "Authentication failed"
    });
  }

  if (error.name === "TokenExpiredError") {
    return res.status(401).json({
      message: "Token expired",
      error: "Please login again"
    });
  }

  res.status(error.status || 500).json({
    message: error.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? error.stack : "Something went wrong"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}` );
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error("Unhandled Promise Rejection:", err.message);
  process.exit(1);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});

module.exports = app;
