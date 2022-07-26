const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ingredient = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

mongoose.model("Ingredient", ingredient)