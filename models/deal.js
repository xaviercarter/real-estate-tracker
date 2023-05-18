// require in mongoose module
const mongoose = require('mongoose');

// shortcut to Shema class
const Schema = mongoose.Schema;

// ratingSchema
const ratingSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

// create mongoose schema
const dealSchema = new Schema({
    address: String,
    yearBuilt: Number,
    purchasePrice: Number,
    appraisedValue: Number,
    bedrooms: Number,
    baths: Number, 
    features: [String]
}, {
    timestamps: true
})

// compile schema into a model and export in one line by calling the modeal method that takes two arguments the capitalized name you want to use for the model and the schema
module.exports = mongoose.model('Deal', dealSchema);
