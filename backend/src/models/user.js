const { Schema, model } = require("mongoose");

const userSchema = new Schema({

  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  role: {
    type: String,
    default: "USER_ROLE"
  }

}, {
  timestamps: true
})

module.exports = model("User", userSchema);