const Results = require("../models/Results");

// To Save User Response
exports.saveResponse = async (req, res) => {
  try {
    const resultObj = new Results({
      ...req.body,
    });
    await resultObj.save();
    return res.status(200).send({
      message: "Your response is saved.",
      isSaved: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong!",
      isSaved: false,
    });
  }
};

// Get All Results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Results.find();
    if (results.length == 0) {
      return res.status(200).send({
        success: true,
        message: "No Records found!",
      });
    }
    return res.status(200).send({
      results: results,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};
