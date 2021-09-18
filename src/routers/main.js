const express = require("express");
const app = express.Router();
const path = require("path");

const controlador = require("../controllers/mainController")

//Websites Routes
app.get("/", controlador.index);

module.exports = app;