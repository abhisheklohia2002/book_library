
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
    },
  });

  const model_User = new mongoose.model("user",userSchema);
  module.exports = model_User;
  