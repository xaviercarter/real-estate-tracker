// require mongoose module
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.DATABASE_URL)