const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers(["8.8.8.8"])

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

module.exports = connectDB