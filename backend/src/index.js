const express = require("express");
const { login, register } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const passport = require("./configs/passport");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/login", login);
app.post("/register", register);

// ---------------------- Google OAuth --------------------------
// app.use(passport.authenticate());
app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: "/auth/google/success",
		failureRedirect: "/auth/google/failure",
	})
);

module.exports = app;
