// models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  preferredCategory: {
    type: String,
  },
});

const UserModel = mongoose.model("user_creds", userSchema);

module.exports = UserModel;
