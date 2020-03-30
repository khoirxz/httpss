const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  years: {
    type: Number,
    required: true
  }
});

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;
