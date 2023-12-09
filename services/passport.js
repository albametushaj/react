const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (userId, done)=>{
    const user = await User.findById(userId);

    done(null, user);
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done)=>{
        const existingUser = await User.findOne({googleID: profile.id});

        if(existingUser){
            done(null, existingUser);
        }
        else {
            const user = await new User({
                googleID: profile.id,
                email: profile.emails[0].value,
                fullName: `${profile.name.givenName} ${profile.name.familyName}`
            }).save();

            done(null, user);
        }
    })
);
