const express = require("mongoose")
const router = express.Router()
const Item = mongoose.model("Item")
const Cart = mongoose.model("Cart")

// Fetch all items in the cart of a particular user, so we pass the requesting user's id
router.get("/getCartItems/:id", (req, res) => {
  const userId = req.params.id
  try{
    let cart = Cart.findOne({userId})
    if(cart && cart.items.length > 0){
      res.send(cart)
    }
    else {
      res.send(null)
    }
  }
  catch(err){
      console.log(err)
      res.status(500).send("Something went wrong")
    }
})

// Pass id so that we can know which user is adding item to cart, add item to his cart or create a new cart
router.post("/addCartItem/:id", (req, res) => {
  const userId = req.params.id
  const { productId, quantity } = req.body
  try{
    let cart = Cart.findOne({userId})
    let item = Item.findOne({_id: productId})
    if(!item){
      res.status(404).send("Item not found")
    }
    const price = item.price;

    // If cart exists for the user
    if(cart){
      let itemIndex = cart.items.findIndex(p => p.productId === productId)

      // Check if product exists or not
      if(itemIndex > -1){
        let productItem = cart.items[itemIndex]
        productItem.quantity += quantity
        cart.items[itemIndex] = productItem
      }
      // if product doesn't exist
      else {
        cart.items.push({productId, quantity, price})
      }
      cart.bill += quantity*price;
      cart = await cart.save();
      return res.status(201).send(cart)
    }
    // if cart doesn't exists, create one
    else {
      const newCart = await Cart.create({
        userId,
        items: [{ productId, quantity, price }],
        bill: quantity*price
      })
      return res.status(201).send(newCart)
    }
  }
  catch(err){
    console.log(err);
    res.status(500).send("Something Went Wrong")
  }
})

// userid - gets the cart of particular user, itemid - search that particular item
router.delete("/deleteCartItem/:userid/:itemid", (req, res) => {
  const userId = req.params.userid
  const productId = req.params.itemid

  try{
    let cart = await Cart.findOne({userId})
      let itemIndex = cart.items.findIndex(p => p.productId === productId)
      if(itemIndex > -1){
        let productItem = cart.items[itemIndex]
        cart.bill -= productItem.quantity*productItem.price
        cart.items.splice[itemIndex, 1]
      }
      cart = await cart.save()
      return res.status(201).send(cart)
    }
  catch(err){
    console.log(err);
    res.status(500).send("Something Went Wrong")
  }
})