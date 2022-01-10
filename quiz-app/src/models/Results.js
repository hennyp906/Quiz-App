const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
      trim: true,
    },
    isCorrect:{
      type: Boolean,
      required: true
    },
    descAnswer: {
      type: String,
      required: false,
      trim: true,
    }
  },
  { timestamps: true }
);

const Results = mongoose.model("Results", resultSchema);

module.exports = Results;
