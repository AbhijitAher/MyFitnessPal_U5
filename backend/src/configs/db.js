const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
	return mongoose.connect(
		`mongodb+srv://MyFitnessPal:${process.env.DBPASS}@mfpcluster.8fsm9.mongodb.net/test`
	);
};

module.exports = connect;
