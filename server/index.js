// import packages
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const fs = require("fs");
const randomWorker = require("./utils/randomArrayWorker");
const rankWorker = require("./utils/RankWorker");

// Declaration variable
const port = process.env.PORT || 5000;

// express application server & server confogration
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));
/**
 * words endpoint
 * return a list of 10 objects selected randomly from the "wordsList"
 */
app.get("/getWords", (req, res, next) => {
  let result = randomWorker.getRandomList(10);
  res.json(result);
  res.end();
});

/**
   * rank endpoint
   * description:takes the final score in the request body, and responds back with the rank%
  rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
  below the given final score.
   */
app.post("/getRank", (req, res, next) => {
  console.log(req.body);
  let rank = rankWorker.calcRank(req.body.score);
  res.json({ rank: rank });
});


app.listen(port, () => console.log(`Express app listening on port ${port}!`));