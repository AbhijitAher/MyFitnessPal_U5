const express = require("express");
const App = require("../models/app.model");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const apps = await App.find().lean().exec();

		console.log(apps);
		return res.status(201).send({ apps });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
});

module.exports = router;
