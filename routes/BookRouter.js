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

router.post("/books/post", async (req, res) => {
  const books = new BookModel(req.body);

  try {
    await books.save();
    res.send(books);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
