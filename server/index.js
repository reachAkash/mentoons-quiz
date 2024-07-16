const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

const check = (req, res) => {
  return res.status(200).json({ message: "Working" });
};

const check2 = (req, res) => {
  return res.status(200).json({ message: "api Working" });
};
app.use("/api/", UserRoute);
app.use("/api/", QuizRoute);

app.use((req, res, next, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json(message);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
