const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

//route pour la création de compte
router.post("/signup", authController.createUser);

module.exports = router;
