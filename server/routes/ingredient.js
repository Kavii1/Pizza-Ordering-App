const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Item = mongoose.model("Item")
const Ingredient = mongoose.model("Ingredient")

// router.post("/addIngredient", (req, res) => {
//   const { name, quantity, price } = req.body
//   Ingredient.findOne({ingredientId})
//   .then(item => {
//     if(item){
//       item.quantity += quantity
//       item.price += price*item.quantity
//     }
//   }).catch(err => {
//     console.log(err);
//     res.status(500).send("Something went wrong");
//   })
// })

// router.post("/addIngredient", (req, res) => {
//     const { name, itemId } = req.body
//     Item.ingredients.findOne({name})
//     .then((savedIngredient) => {
//       if(savedIngredient){
//         if(savedIngredient === 1) {
//           return res.status(201).json({savedIngredient})
//         }
//         else {
//           savedIngredient.quantity += 1
//           savedIngredient.total = savedIngredient.quantity * savedIngredient.price
//           return res.status(201).json({savedIngredient})
//         }
//       }
//       else{
//         const ingredientPrice = Ingredient.findOne({name})
//         const newIngredient = Ingredient.create({
//           name,
//           quantity: 1,
//           price: ingredientPrice.price
//         })
//         Item.findByIdAndUpdate(itemId,{
//           $push:{ingredients:newIngredient}
//         },{
//           new: true
//         })
//         $push:{Item.ingredients:newIngredient}
//         return res.status(201).send(newIngredient)
//       }
//     }).catch(err => {
//       console.log(err);
//     })
// })

router.put("/removeIngredient/:id", (req, res) => {
  const ingredientId = req.params.id
  const { name, quantity, price } = req.body
  Ingredient.findByIdAndUpdate({_id: ingredientId}, req.body)
  .then(item => {
    if(item){
      item.quantity -= quantity
      item.price -= price*item.quantity
    }
  }).catch(err => {
    console.log(err);
    res.status(500).send("Something went wrong");
  })
})

module.exports = router