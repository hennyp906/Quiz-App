const express = require("express");
const router = new express.Router();
const Questions = require("../controllers/Questions");

router.get("/questions/", Questions.getAllQuestions);

router.post("/question/add/", Questions.saveQuestion);

module.exports = router;
