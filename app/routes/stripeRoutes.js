// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express')
const router = express.Router()

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HaPCvIJomovXBOLwjVY8PzItfEkXSHnyaGXZWnT9YUDr88E0fjXktzCOScM0BC396sTbeHjJiIphrt1nQ6wHTGo003zuwd6FA')

router.post('/create-checkout-session', async (req, res) => {
  console.log('req', req)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt'
          },
          unit_amount: 2000
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:7165/success',
    cancel_url: 'http://localhost:7165/cancel'
  })

  res.json({ id: session.id })
})

module.exports = router
