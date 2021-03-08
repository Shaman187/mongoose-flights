const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
// const flightSchema = new Schema({
//   airline: String,
//   releaseYear: Number,
//   mpaaRating: String,
//   cast: [String],
//   nowShowing: Boolean
// });

const flightSchema = new mongoose.Schema({
  airline: {
      type: String,
      enum: ['American', 'Delta', 'Southwest', 'United'],
   },

  airport: {
      type: String,
      enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
  },

  flightNo: {
      type: Number,
      min: 10,
      max: 9999
  },

  departs: {
      type: Date,
      default: function() {
        //   console.log("hitting default")
          return new Date().getFullYear() + 1
      }
  },

  nowFlying: Boolean
})
	
// Compile the schema into a model and export it
module.exports = mongoose.model('flight', flightSchema);