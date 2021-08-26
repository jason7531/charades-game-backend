const mongoose = require("mongoose");
const wordSchema = mongoose.Schema(
  {
    text: {
      type: String,
      max: 100,
    },
    correct: {
      type: String,
      max: 100,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Word", wordSchema);
