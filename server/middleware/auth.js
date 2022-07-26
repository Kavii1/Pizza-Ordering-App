const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, res, next) => {
  const {authorization} = req.headers
  // Check if token exists
  if(!authorization){
    return res.status(401).json({error: "No token, authorization denied"})
  }
  const decodedTtoken = authorization.replace("Bearer ", "")
  // Verify token
  jwt.verify(decodedTtoken, JWT_SECRET, (err, payload)=>{
    if(err){
      return res.status(401).json({error: "Token is not valid"})
    }
    // Add user from payload
    const {_id} = payload
    User.findById(_id).then(userdata=>{
      req.user = userdata
      next()
    })
  })
}