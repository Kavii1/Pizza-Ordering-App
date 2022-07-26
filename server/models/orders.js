const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
},
  items: [{
    productId: {
      type: String
    },
    quantity: {
      type: Number,
      required: true,
      quantity: [1, "Quantity cannot be less than 1"],
      default: 1
    },
    price: {
      type: Number
    }
  }],
  bill: {
    type: Number,
    required: true,
    default: 0
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

mongoose.model("Order", orderSchema)