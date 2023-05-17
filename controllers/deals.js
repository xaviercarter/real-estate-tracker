/////////////////////////
// import dependencies //
/////////////////////////

// import deal model
const Deal = require('../models/deal');

/////////////////////////////////
// define controller functions //
/////////////////////////////////
function newDeal(req, res) {
    console.log('the new route has been hit');
    res.render('deals/new');
};







///////////////////////
// export our models //
///////////////////////
module.exports = {
    new: newDeal,
};