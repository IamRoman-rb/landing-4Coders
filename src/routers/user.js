const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/login", userController.login);  //se utiliza la constante userController para utilizar la ruta
router.get("/register", userController.register);

module.exports = router;