const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/questionbank");
  console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const questionBankSchema = new mongoose.Schema({
  question: String,
  choiceA: String,
  choiceB: String,
  choiceC: String,
  choiceD: String,
  answer: String,
});
const QuestionBank = mongoose.model("questionBank", questionBankSchema);

server.use(cors());
server.use(bodyParser.json());
//create a question bank
server.post("/demo", async (req, res) => {
  let questionBank = new QuestionBank();
  questionBank.question = req.body.question;
  questionBank.choiceA = req.body.ChoiceA;
  questionBank.choiceB = req.body.ChoiceB;
  questionBank.choiceC = req.body.ChoiceC;
  questionBank.choiceD = req.body.ChoiceD;
  questionBank.answer = req.body.CorrectAnswer;
  const doc = await questionBank.save();
  //   console.log(doc);
  res.json(doc);
});

server.get("/demo", async (req, res) => {
  const docs = await QuestionBank.find({});
  res.json(docs);
});

server.listen(8080, () => {
  console.log("server started");
});
