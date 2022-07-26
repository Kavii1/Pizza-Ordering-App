const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ingredient = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

mongoose.model("Ingredient", ingredient)