const mongoose = require("mongoose");
function Connection() {
  // const mongoURI = "mongodb://127.0.0.1:27017/nuevoChat2";
  const mongoURI =
    "mongodb+srv://tobiasdutra:nNnnUd2rPaOQwAFR@cluster0.dyfkjus.mongodb.net/chat";
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
}

module.exports = Connection;
