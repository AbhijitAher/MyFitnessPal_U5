const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		goal: { type: String, required: true },
		activity_level: { type: String, required: true },
		gender: { type: String, required: true },
		birth_date: { type: String, required: true },
		country: { type: String, required: true },
		zip_code: { type: Number, required: true },
		height: { type: Number, required: true },
		weight: { type: Number, required: true },
		goal_weight: { type: Number, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
	if (!isModified("passwork")) return next();
	bcrypt.hash(this.password, 10, (err, hash) => {
		this.password = hash;
		return next();
	});
});

userSchema.methods.checkPassword = function (password) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password, function (err, same) {
			if (err) return reject(err);
			return resolve(same);
		});
	});
};
const User = model("user", userSchema);
module.exports = User;
