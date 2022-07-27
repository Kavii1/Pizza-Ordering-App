const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Item = mongoose.model("Item")
const auth = require("../middleware/auth")

// Router to fetch all the items
router.get("/allPizzas",auth , (req, res) => {
  Item.find()
  .sort("-size")
  .sort("-ingredients")
  .sort("-dateAdded")
  .then(items => res.json(items))
})

// Router to add a new item to DB
router.post("/postPizzas", (req, res) => {
  const newItem = new Item(req.body);
  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err))
})

// Router to apdate an item in DB
router.put("/updateItems/:id", (req, res) => {
  Item.findByIdAndUpdate({_id: req.params._id}, req.body)
  .then(item => {
    Item.findOne({_id: req.params._id})
    .then(item => res.json(item))
  })
})

// Router to delete an item from DB
router.delete("/deleteItems/:id", (req, res) => {
  Item.findByIdAndDelete({_id: req.params._id})
  .then(item => res.json({Success: true}))
})

module.exports = router