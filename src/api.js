const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();
const BookRouter = require("../routes/BookRouter");

app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async err => {
    try {
      console.log(err);
    } catch (err) {
      console.log(err);
    }
  }
);

app.use(`/.netlify/functions/api`, BookRouter);

module.exports = app;
module.exports.handler = serverless(app);
