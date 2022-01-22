const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
require("dotenv").config(); // has Google client id and secret
const { uuid } = require("uuidv4");

const User = require("../models/user.model");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:2626/auth/google/callback", // host url
			passReqToCallback: true,
		},
		async function (request, accessToken, refreshToken, profile, done) {
			console.log("accessToken:", accessToken);
			console.log("refreshToken:", refreshToken);
			console.log("profile:", profile);
			let user = await User.findOne({ email: profile?._json?.email })
				.lean()
				.exec();

			if (!user) {
				user = await User.create({
					email: profile?._json.email,
					password: uuid(),
				});
			}
			return done(null, "user");
		}
	)
);

module.exports = passport;
