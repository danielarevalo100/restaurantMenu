const mongoose = require('mongoose')
const { Schema } = mongoose;


const PlateSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: false, default: ''},
  price: { type: Number, required: true },
  categories: [Schema.Types.ObjectId],
  image: { type: String, required: false, default: '' },
  available: { type: Boolean, required: false, default: true }
});

module.exports = mongoose.model('Plate', PlateSchema)
