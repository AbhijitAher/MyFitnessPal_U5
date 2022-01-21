const express = require("express");
const { login, register } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/login", login);
app.post("/register", register);

module.exports = app;
