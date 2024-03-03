var express = require("express");
var router = express.Router();
const isAuthenticated = require("../middleware/auth-middleware");
const userController = require("../controllers/user");

//signup
router.post("/create-user", userController.createUser);
//login
router.post("/login-user", userController.loginUser);

module.exports = router;
