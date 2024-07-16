const Check = (req, res, next) => {
  return res.status(302).json({
    message: "Working!",
  });
};

const Signin = (req, res, next) => {
  return res.status(200).json("Hello");
};
const Signup = (req, res, next) => {
  return res.status(200).json("Hello");
};

module.exports = { Check, Signup, Signin };
