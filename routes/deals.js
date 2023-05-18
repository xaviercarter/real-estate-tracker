/////////////////////////
// import dependencies //
/////////////////////////

const express = require('express');
const router = express.Router();
const dealCtrl = require('../controllers/deals');
const removeBlanks = require('../bin/rbMiddleware');


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

// find deal and redirect to edit form
router.get('/edit/:id', dealCtrl.renderEdit)

router.patch('/:id', removeBlanks, dealCtrl.updateDeal)

///////////////////////
// export our models //
///////////////////////
module.exports = router;
