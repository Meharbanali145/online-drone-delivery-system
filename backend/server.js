require("dotenv").config()
const app = require("./app")
const mongoose = require("mongoose")
const connectDB = require("./src/config/db.config")

connectDB()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})