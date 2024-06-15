const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_CONNECT_URI } = process.env;

function Connection() {
  const mongoURI = "mongodb://127.0.0.1:27017/test3";
  // MONGODB_CONNECT_URI =
  //   "mongodb+srv://tobiasdutra:nNnnUd2rPaOQwAFR@cluster0.dyfkjus.mongodb.net/";
  try {
    mongoose
      .connect(mongoURI, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      })
      .then(console.log("connected to mongodb"));
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
  }
}

module.exports = Connection;
