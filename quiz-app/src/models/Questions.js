const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: [
      {
        option: { type: String, required: true, trim: true },
        isTrue: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Questions = mongoose.model("Question", questionSchema);

module.exports = Questions;
