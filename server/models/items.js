const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
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