const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// create notes for a deal
router.post('/deals/:id/reviews', reviewsCtrl.create);

module.exports = router;