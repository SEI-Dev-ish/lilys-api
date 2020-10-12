const mongoose = require('mongoose')
const flowerSchema = require('./flower')

const orderSchema = new mongoose.Schema({

  isComplete: {
    type: Boolean,
    required: true
  },
  totalPrice: {
    type: Number
  },
  quantity: {
    type: Number
  },
  flower: [flowerSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
