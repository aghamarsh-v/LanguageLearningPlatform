const express = require("express");
const router = express.Router();
const { register, login, updateLang} = require("./Auth");
const {userAuth} = require("../middleware/auth");

router.route("/auth/registerUser").post(register);
router.route("/auth/userLogin").post(login);

// protecting updating of lang based on JWT token
router.route("/updateLang").put(userAuth, updateLang);
module.exports = router;