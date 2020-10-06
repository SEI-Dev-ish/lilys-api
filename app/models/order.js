const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quanity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
