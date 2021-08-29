const mongoose = require("mongoose");
const cardSchema = mongoose.Schema(
  {
    description: {
      type: String,
      max: 100,
    },
    imageurl: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Card", cardSchema);
