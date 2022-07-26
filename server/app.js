const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5425
const {MONGOURI} = require("./keys")

mongoose.connect(MONGOURI)
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to Mongoose!");
})
mongoose.connection.on("error", (err) => {
  console.log(`Error connecting to Mongoose :(, ${err}`);
})

require("./models/user")
require("./models/ingredients")
require("./models/cart")
require("./models/items")
require("./models/orders")

app.use(express.json())
app.use(require("./routes/auth"))

app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}...`);
})