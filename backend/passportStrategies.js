const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

module.exports = (passport, User) => {
  passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOneAndUpdate(
      { googleId: profile.id },
      { name: profile.displayName },
      { new: true, upsert: true }
    );
    done(null, user);
  }));

  passport.use(new FacebookStrategy({
    clientID: 'FACEBOOK_CLIENT_ID',
    clientSecret: 'FACEBOOK_CLIENT_SECRET',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails']
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOneAndUpdate(
      { facebookId: profile.id },
      { name: profile.displayName },
      { new: true, upsert: true }
    );
    done(null, user);
  }));

  passport.use(new GitHubStrategy({
    clientID: 'GITHUB_CLIENT_ID',
    clientSecret: 'GITHUB_CLIENT_SECRET',
    callbackURL: '/auth/github/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOneAndUpdate(
      { githubId: profile.id },
      { name: profile.displayName },
      { new: true, upsert: true }
    );
    done(null, user);
  }));
};
