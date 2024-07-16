const express = require("express");
const { Check, Signin, Signup } = require("../controllers/User.controller");
const router = express.Router();

router.get("/check", Check);
router.post("/signin", Signin);
router.post("/signup", Signup);

module.exports = router;
