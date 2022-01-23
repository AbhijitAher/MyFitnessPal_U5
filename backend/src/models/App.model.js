const { Schema, model } = require("mongoose");

const AppSchema = new Schema(
	{
		app_name: { type: String, required: true },
		category: { type: String, required: true },
		img_url: { type: String, required: true },
		app_link: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const App = model("app", AppSchema);
module.exports = App;
