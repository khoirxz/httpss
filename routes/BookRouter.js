const express = require("express");
const BookModel = require("../models/bookModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      greed: "hello"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/books", async (req, res) => {
  const books = await BookModel.find({});

  try {
    res.send(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
