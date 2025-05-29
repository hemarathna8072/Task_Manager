const passport = require('passport');

module.exports = (app) => {
  // Redirect user to Google for authentication
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // Callback URL after Google authentication
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
      session: false,
    }),
    (req, res) => {
      const token = req.user.token; // from Passport strategy
      // Redirect to frontend with token
      res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    }
  );
};
