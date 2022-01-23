const express = require("express");
const { login, register } = require("./controllers/auth.controller");
const passport = require("./configs/passport");

const userController = require("./controllers/user.controller");
const foodController = require("./controllers/food.controller");
const appController = require("./controllers/app.controller");

const app = express();

app.use(express.json());
app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
	done(null, { user, token });
});
passport.deserializeUser(function (user, done) {
	done(err, user);
});

app.post("/register", register);
app.use("/login", login);

app.use("/foods", foodController);
app.use("/users", userController);

// ---------------------- Google OAuth --------------------------
// app.use(passport.authenticate());

app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: "/",
		failureRedirect: "/auth/google/failure",
	}),
	function (req, res) {
		return res.status(201).json({ user: req.user.user, token: req.user.token });
	}
);

app.get("/auth/google/failure", function (req, res) {
	return res.send("Something went wrong");
});

module.exports = app;
