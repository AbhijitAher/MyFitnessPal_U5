const { Schema, model } = require("mongoose");

const AppSchema = new Schema(
	{
		name: { type: String, required: true },
		type: { type: String, required: true },
		img: { type: String, required: true },
		link: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const App = model("app", AppSchema);
module.exports = App;
