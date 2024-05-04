const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

//route pour la création de compte
router.post("/signup", authController.createUser);

//route pour la connexion
router.post("/login", authController.login);

module.exports = router;
