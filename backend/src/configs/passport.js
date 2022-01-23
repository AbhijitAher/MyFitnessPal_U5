require("dotenv").config(); // has Google client id and secret
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4 } = require("uuidv4");

const User = require("../models/user.model");
const { newToken } = require("../controllers/auth.controller");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
			userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
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
					password: v4(),
				});
			}
			const token = newToken(user);
			return done(null, { user, token });
			// return done(null, "user");
		}
	)
);

module.exports = passport;
