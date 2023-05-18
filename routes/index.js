/////////////////////////
// import dependencies //
/////////////////////////

const express = require('express');
const router = express.Router();
const passport = require('passport');

/////////////////////////////////
// define controller functions //
/////////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REI Home' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/deals',
    failureRedirect: '/deals'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/deals');
  })
})

///////////////////////
// export our routes //
///////////////////////
module.exports = router;
