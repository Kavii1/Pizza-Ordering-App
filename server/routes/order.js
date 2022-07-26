const express = require("mongoose")
const router = express.Router()
const Order = mongoose.model("Order")

// Fetch all orders, id to return the correct user's orders
router.get("/getOrders/:id", (req, res) => {

})

// Create a new order, id is to find the user
router.post("/checkout/:id", (req, res) => {

})