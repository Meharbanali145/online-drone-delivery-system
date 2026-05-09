const mongoose = require("mongoose")

const listingSchema = new mongoose.Schema({
    droneId: {
        type: Number,
        required: true,
        unique: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ["available", "unavailable"],
        default: "available"
    }
})


const listingModel = mongoose.model("listing",listingSchema)
module.exports = listingModel