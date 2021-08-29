const express = require("express");
const router = express.Router();
const Card = require("./models/card");
const Word = require("./models/word");

router.get("/", (req, res) => {
  Card.find({}, (err, cards) => {
    if (err) {
      res.status(400).json({
        error: "error getting items from DB",
      });
    }
    Word.find({}, (err, words) => {
      if (err) {
        res.status(400).json({
          error: "error getting items from DB",
        });
      }
      res.json({ cards, words });
    });
  });
});

module.exports = router;
