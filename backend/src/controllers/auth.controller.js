require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const newToken = (user) => {
	return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email }).lean().exec();
		if (user) {
			return res.status(400).json({
				status: "failed",
				message: "Email address already exists, Try Logging in.",
			});
		}
		user = await User.create(req.body);
		const token = newToken(user);
		return res.status(201).json({ user, token });
	} catch (err) {
		return res.status(500).json({ status: "failed", message: err.message });
	}
};

const login = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(400).json({
				status: "failed",
				message: "User doesn't Exist, Please Register",
			});
		}
		const match = await user.checkPassword(req.body.password);
		if (!match) {
			return res.status(400).json({
				status: "failed",
				message: "Enter Valid Credentials'",
			});
		}
		const token = newToken(user);
		return res.status(200).send({ user, token });
	} catch (err) {
		return res.status(500).json({ status: "failed", message: err.message });
	}
};

module.exports = { register, login };
