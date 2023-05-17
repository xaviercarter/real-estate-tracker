/////////////////////////
// import dependencies //
/////////////////////////

const express = require('express');
const router = express.Router();
const dealCtrl = require('../controllers/deals');


/////////////////////////////
// define router functions //
/////////////////////////////

/* GET deals create form. */
router.get('/new', dealCtrl.new);




///////////////////////
// export our models //
///////////////////////
module.exports = router;
