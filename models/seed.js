// import Dependencies
require('dotenv').config();
const mongoose = require('../config/database');
const Deal = require('./deal');
mongoose.connect(process.env.DATABASE_URL);

// seed script code

// save the connection in a variable
const db = mongoose.connection
console.log('db in seed file', db)

db.on('open', () => {
    // array of deals
    const startDeals = [
        {   
            address: '123 w bigbird', 
            yearBuilt: 1970, 
            purchasePrice: 100000, 
            appraisedValue: 200000, 
            bedrooms: 4, 
            baths: 2, 
            features: ['carpet', 'central air', 'new windows', 'new appliances']
        },
        {   
            address: '321 e smallbird', 
            yearBuilt: 1969, 
            purchasePrice: 200000, 
            appraisedValue: 100000, 
            bedrooms: 3, 
            baths: 2, 
            features: ['carpet', 'central air', 'new windows', 'new appliances']
        },
    ]
    // when seeding we delete everything in the database in that collection
    Deal.deleteMany({})
        .then(deletedDeals => {
            console.log('this is what remove returns', deletedDeals)
            Deal.create(startDeals)
                .then(data => {
                    console.log('this is what was created', data)
                    db.close()
                })
                .catch(err => {
                    console.log(err)
                    db.close()
                })
        })


        .catch(err => {
            console.log(err)
            db.close()
        })
})