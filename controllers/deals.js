/////////////////////////
// import dependencies //
/////////////////////////

// import deal model
const deal = require('../models/deal');
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
        
            return res.redirect(`/deals/${dealDoc.id}`)
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

// takes the mongoDb id and finds the appropriate document
function show(req, res) {
    console.log('these are the request parameters\n', req.params)
    Deal.findById(req.params.id)
        .then(deal => {
            console.log('this is the deal in show\n', deal)
            res.render('deals/show', {deal: deal})
        })
        .catch(err => {
            console.log('============err');
            console.log(err);
            console.log('============');
        
            return res.send('err creating, check the terminal');
        })
    
}

function deleteDeal(req, res) {
    
    Deal.findById(req.params.id)
        // if the movie is found, we use a mongoose method to delete it
        .then(movie => {
            return deal.deleteOne()
        })
        // redirect to the index page after delete
        .then(() => {
            res.redirect('/deals')
        })
        
        .catch(err => {
            console.log('=================err')
            console.log(err)
            console.log('====================')

            return res.send('could not find movie - DELETE')
        })
}



///////////////////////
// export our models //
///////////////////////
module.exports = {
    new: newDeal,
    create,
    index,
    show,
    deleteDeal,
};

