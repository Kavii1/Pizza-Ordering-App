const express = require("express")
const router = express.Router()

// Router to fetch all the items
router.get("/getItems", (req, res) => {
  
})

// Router to add a new item to DB
router.post("/postItems", (req, res) => {

})

// Router to apdate an item in DB
router.put("/updateItems/:id", (req, res) => {

})

// Router to delete an item from DB
router.delete("/deleteItems/:id", (req, res) => {
  
})

module.exports = router