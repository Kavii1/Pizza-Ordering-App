const mongoose = require("mongoose")
const Schema = mongoose.Schema
const {ObjectId} = Schema.Types
// const Ingredient = mongoose.model("Ingredient")


const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  ingredients: {
    type: ObjectId,
    ref: "Ingredient"
  },
  price: {
    type: Number,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})
// }, {
//     timestamps: true
// })


mongoose.model("Item", ItemSchema)