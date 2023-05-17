// require mongoose module
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.DATABASE_URL)

// mongoose.connect() function defines the connection string to a key on the mongoose object called connection
const db = mongoose.connection;

// run a function when we are connected
db.on('connected', function() {
    console.log(`connected to MongoDb ${db.name} at ${db.host}:${db.port}`);
});

module.exports = mongoose