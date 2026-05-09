const userModel = require("../models/user.model")
const droneListingModel = require("../models/drone_listing")
const deliveryModel = require("../models/delivery.model")
const listingModel = require("../models/drone_listing")

async function addDrone(req,res){
    const {droneId,manufacturer ,model, price ,status} = req.body

    const isDroneExists = await listingModel.findOne({
        droneId
    })

    if(isDroneExists){
        return res.status(409).json({
            message:"Drone Already Exists"
        })
    }

    const drone = await listingModel.create({
        droneId,
        manufacturer,
        model, 
        price,
        status
    })

    res.status(201).json({
        message:"Drone register Successfuly",
        drone:{
            id:drone._id,
            droneId:drone.droneId,
            manufacturer:drone.manufacturer,
            model:drone.manufacturer,
            price:drone.price,
            status:drone.status
        }
    })
}

async function getAllDrone(req,res){
    const drone  = await listingModel.find()
    res.status(201).json({
        message: "Drone fetched successfuly",
        drone: drone
    })
}

async function updateDrone(req, res) {

    try {

        const droneId = req.params.droneId;

        const updatedDrone = await listingModel.findOneAndUpdate(
            { droneId: droneId },
            req.body,
            { new: true }
        );

        if (!updatedDrone) {
            return res.status(404).json({
                message: "Drone not found"
            });
        }

        res.status(200).json({
            message: "Drone updated successfully",
            drone: updatedDrone
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

async function seeOrders(req,res){
    const delivery = await deliveryModel.find({
        deliveryStatus:"pending"
    })
    return res.status(200).json({
        message:"All Orders",
        delivery
        
    })
}

async function assignDrone(req,res){
    try{
        const orderId = req.params.orderId
        const {droneId} = req.body
        const order = await deliveryModel.findById(orderId);
        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });
        }
        const drone = await listingModel.findById(droneId);
        if (!drone) {
            return res.status(404).json({
                message: "Drone not found"
            });
        }
        if (drone.status !== "available") {
            return res.status(400).json({
                message: "Drone not available"
            });
        }
        order.droneId = drone._id;
        order.deliveryStatus = "delivered";

        await order.save();
        drone.status = "unavailable";
        await drone.save();

        return res.status(200).json({
            message: "Drone assigned successfully",
            order
        });
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    addDrone,
    getAllDrone,
    updateDrone,
    seeOrders,
    assignDrone
}