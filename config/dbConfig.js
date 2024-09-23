module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false; 

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB connection already established.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true; 
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); 
  }
};

module.exports = connectDB;

