const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  chapter: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  audioDesc: {
    type: String,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
