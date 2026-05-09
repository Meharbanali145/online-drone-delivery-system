const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    senderName: {
        type: String,
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },

    dropoffLocation: {
        type: String,
        required: true
    },

    packageWeight: {
        type: Number,
        required: true
    },

    droneId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "listing",
        required: true
    },

    deliveryStatus: {
        type: String,
        enum:["pending","delivered"],
        default:"pending"
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

const delivery = mongoose.model('delivery', deliverySchema);

module.exports = delivery;
