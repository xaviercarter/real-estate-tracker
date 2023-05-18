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

//GET all deals
router.get('/', dealCtrl.index);

// post deal creation
router.post('/', dealCtrl.create);


// GET an individual deal using the id
router.get('/:id', dealCtrl.show);

// deleteOne deal by id
router.delete('/:id', dealCtrl.deleteDeal);

///////////////////////
// export our models //
///////////////////////
module.exports = router;
