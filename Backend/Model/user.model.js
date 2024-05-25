const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model("testdatabase", userSchema);

module.exports = User;
