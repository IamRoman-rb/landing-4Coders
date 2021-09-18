const fs = require("fs");
const path = require("path");

module.exports = {
    login: (req, res) => res.sendFile(path.resolve(__dirname, "../views/login.html")),
    register: (req, res) => res.sendFile(path.resolve(__dirname, "../views/register.html")),
}