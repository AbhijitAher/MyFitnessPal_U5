require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
	return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
	try {
		// check if the email address provided already exist
		let user = await User.findOne({ email: req.body.email }).lean().exec();

		// if it already exists then throw an error
		if (user) {
			return res.status(400).json({
				status: "failed",
				message: "Email address already exists, Try Logging in.",
			});
		}

		// else we will create the user we will hash the password as plain text password is harmful
		user = await User.create(req.body);

		// we will create the token
		const token = newToken(user);

		// return the user and the token
		return res.status(201).json({ user, token });
	} catch (err) {
		return res.status(500).json({ status: "failed", message: err.message });
	}
};

const login = async (req, res) => {
	try {
		// check if the email address provided already exist
		let user = await User.findOne({ email: req.body.email });

		// if it does not exist then throw an error
		if (!user) {
			return res.status(400).json({
				status: "failed",
				message: "User doesn't Exist, Please Register",
			});
		}

		// else we match the password
		const match = await user.checkPassword(req.body.password);

		// if not match then throw an error
		if (!match) {
			return res.status(400).json({
				status: "failed",
				message: "Enter Valid Credentials'",
			});
		}

		// if it matches then create the token
		const token = newToken(user);

		// return the user and the token
		return res.status(201).send({ user, token });
	} catch (err) {
		return res.status(500).json({ status: "failed", message: err.message });
	}
};

module.exports = { register, login, newToken };
