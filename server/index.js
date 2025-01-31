const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/user.route.js");
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
app.use("/api", UserRoute);
// app.use("/api/", QuizRoute);

app.use((err, req, res, next) => {
  const errCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(errCode).json(message);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
