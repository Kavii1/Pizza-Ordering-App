const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  description: {
    type: String,
    required: true
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