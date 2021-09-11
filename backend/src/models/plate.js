const mongoose = require('mongoose')
const { Schema } = mongoose;


const PlateSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true},
  price: { type: Number, required: true },
  categories: [Schema.Types.ObjectId],
  image: { type: String, required: true, default: '' },
  available: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('Plate', PlateSchema)
