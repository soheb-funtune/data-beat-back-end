// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  datePublished: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PostData", postSchema);
