const mongoose = require('mongoose')

const flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = flowerSchema
