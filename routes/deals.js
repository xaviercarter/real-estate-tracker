const express = require('express');
const router = express.Router();

/* GET deals create form. */
router.get('/newdeal', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
