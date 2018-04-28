// Authentication / Authorization packages
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import User from '../models/user';

// Setting up local login strategy
const localLogin = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (userErr, user) => {
    if (userErr) { return done(userErr); }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    return user.comparePassword(password, (passErr, isMatch) => {
      if (passErr) { return done(passErr); }
      if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  // Telling Passport where to find the secret
  secretOrKey: process.env.secret,
};

// Setting up JWT login strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err) return done(err, false);

    if (user) return done(null, user);

    return done(null, false);
  });
});

// Allow passport to use strategies
export default function () {
  passport.use(jwtLogin);
  passport.use(localLogin);
}
