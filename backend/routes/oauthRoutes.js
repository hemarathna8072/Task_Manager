module.exports = (app, passport) => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect('http://localhost:3000/dashboard');
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect('http://localhost:3000/dashboard');
  });

  app.get('/auth/github', passport.authenticate('github'));
  app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect('http://localhost:3000/dashboard');
  });
};
