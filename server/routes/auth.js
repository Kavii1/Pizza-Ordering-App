const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys") //JSON Web Token to authenticate user
const auth = require("../middleware/auth")

router.post("/signup", (req, res) => {
  const {name, email, password} = req.body

  if(!email || !name || !password){
    return res.status(400).json({error:"Please add all the fields"})
  }
  User.findOne({email})
  .then((savedUser) => {
    if(savedUser){
      return res.status(400).json({error:"User already exists"})
    }
    bcrypt.hash(password, 11)
    .then(hashedPassword => {
      const user = new User({
        email,
        name,
        password: hashedPassword
      })
  
      user.save()
      .then(user => {
        res.json({message: "Saved User Successfully"})
      })
      .catch(err => {
        console.log(err);
      })
    })
    
  }).catch(err => {
    console.log(err);
  })
})

router.post("/signin", (req, res) => {
  const {email, password} = req.body
  if(!email, !password){
    return res.status(400).json({error: "Please add all the fields"})
  }
  User.findOne({email})
  .then(savedUser => {
    if(!savedUser){
      res.status(400).json({error: "User doesn't exist"})
    }
    // Validate Password
    bcrypt.compare(password, savedUser.password)
    .then(isMatch => {
      if(isMatch){
        const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
        const {_id, name, email} = savedUser
        res.send({token, user: {_id, name, email}})
      }
      else {
        return res.status(400).json({error: "Invalid credentials"})
      }
    })
  }).catch(err => {
    console.log(err);
  })
})

// Route to check whether the user is logged in or not
router.get("/getUser", (req, res) => {
  User.findById(req.user._id)
  .select("-password")
  .then(user => res.json(user))
})

module.exports = router