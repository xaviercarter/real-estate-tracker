/////////////////////////
// import dependencies //
/////////////////////////

const Deal = require('../models/deal');







/////////////////////////////////
// define controller functions //
/////////////////////////////////
async function create(req, res) {
    try {
        
    const deal = await Deal.findById(req.params.id);
      // Add the user req.body to review
      req.body.user = req.user;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
    
      // give it a push
      deal.reviews.push(req.body);
    // save
    await deal.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/deals/${req.params.id}`);
}


///////////////////////
// export our models //
///////////////////////
module.exports = {
  create
};