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

function create (req, res) {
    console.log('this is the req.body in create\n', req.body);
    
    //remove white space from strings
    // req.body.cast = req.body.cast.replace(/\s*, \s*g, ','/);
    // req.body.cast = req.body.cast.split(',');
    // console.log('req.body.cast halfway through conversion\n', req.body.cast);
    // console.log('req.body after data conversion\n', req.body);

    Deal.create(req.body)
        .then(dealDoc => {
            console.log('=== below is the deal from the db ===');
            console.log(dealDoc);
            console.log('===================');
        
            return res.send(`Deal Created: ${dealDoc.title}`);
    })
    
    
        .catch(err => {
            console.log('============err');
            console.log(err);
            console.log('============');
        
            return res.send('err creating, check the terminal');
    })
    
    
    // res.send('hit the post route for deals');
}

// find all movies and send back as response
function index(req, res) {

    Deal.find({})
        .then(dealDocs => {
            console.log('found all deals\n', dealDocs)
            res.render('deals/index', { deals: dealDocs })
        })

        .catch(err => {
            console.log('============err');
            console.log(err);
            console.log('============');
        
            return res.send('err creating, check the terminal');
        })

}




///////////////////////
// export our models //
///////////////////////
module.exports = {
    new: newDeal,
    create,
    index,
};