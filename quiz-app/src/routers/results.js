const express = require("express");
const router = new express.Router();
const Results = require("../controllers/Results");

router.post("/submit/", Results.saveResponse);

router.get("/results/", Results.getAllResults);

module.exports = router;
