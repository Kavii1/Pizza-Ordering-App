const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: [{
    productId: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity cannot be less than 1"]
    },
    price: Number
  }],
  bill: {
    type: Number,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

mongoose.model("Order", orderSchema)