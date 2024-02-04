const express = require("express");
const authController = require("../controllers/authReg");
const loginController = require("../controllers/authLogin");

const router = express.Router();

router.post("/", loginController.login);
router.post("/register", authController.register);

module.exports = router;
