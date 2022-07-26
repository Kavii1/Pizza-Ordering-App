const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Item = mongoose.model("Item")

// Router to fetch all the items
router.get("/getItems", (req, res) => {
  Item.find().sort({date: -1}) //Get all the items and sort them in decreasing order by date added
  .then(items => res.json(items))
})

// Router to add a new item to DB
router.post("/postItems", (req, res) => {
  const newItem = new Item(req.body);
  newItem.save()
  .then(item => res.json(item))
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