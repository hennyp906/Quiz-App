const express = require("express");
require("./db/mongoose");
const cors = require("cors");

const questionRouter = require("./routers/questions");
const resultRouter = require("./routers/results");

const app = express();
app.use(cors());
app.use(express.json());

app.use(questionRouter);
app.use(resultRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is up on port " + process.env.PORT);
});
