const express = require("mongoose")
const router = express.Router()
const mongoose = require("mongoose")
const Order = mongoose.model("Order")
const Cart = mongoose.model("Cart")
const auth = require("../middleware/auth")

// Fetch all orders, id to return the correct user's orders
router.get("/getOrders/:id", (req, res) => {
  const userId = req.params.id
  Order.find({ userId }).sort({date: -1})
    .then(orders => res.json(orders))
})

// Push the cart items to order after checkout
router.post("/checkout/:id" ,auth , (req, res) => {
  try {
    const userId = req.params.id;
    let cart = Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      const order = Order.create({
        userId,
        items: cart.items,
        bill: cart.bill
      })
      const data = Cart.findByIdAndDelete({ _id: cart._id });
      return res.status(201).send(order);
    }
    else {
      res.status(500).send("You do not have items in cart");
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
})

module.exports = router