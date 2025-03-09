const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/error");

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// API Routes
app.use("/uploads", express.static("uploads")); // Serve uploaded files
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Error middleware
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// ✅ Export app instead of using app.listen()
module.exports = app;
