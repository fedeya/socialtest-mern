const { Schema, model } = require("mongoose");

const commentSchema = new Schema({

  public_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = model("Commentary", commentSchema);