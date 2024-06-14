const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_CONNECT_URI } = process.env;

const Connection = async () => {
  // const mongoURI = "mongodb://127.0.0.1:27017/UltimoChat";
  try {
    await mongoose
      .connect(MONGODB_CONNECT_URI, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      })
      .then(console.log("connected to mongodb"));
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
  }
};

module.exports = Connection;
