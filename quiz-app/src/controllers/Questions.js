const Questions = require("../models/Questions");

//To save question
exports.saveQuestion = async (req, res) => {
  try {
    const resultObj = new Questions({
      ...req.body,
    });
    await resultObj.save();
    return res.status(200).send({
      message: "Question is saved.",
      isSaved: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong!",
      isSaved: false,
    });
  }
};

//To get all quiz questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Questions.find();
    return res.status(200).send({
      success: true,
      questions: questions,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};
