const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
