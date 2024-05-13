const express = require("express");
const router = express.Router();
const { register, login } = require("./Auth");

router.route("/registerUser").post(register);
router.route("/userLogin").post(login);
module.exports = router;