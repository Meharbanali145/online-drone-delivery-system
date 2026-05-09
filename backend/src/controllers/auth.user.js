const userModel = require("../models/user.model")
const deliveryModel = require("../models/delivery.model")
const droneListing = require("../models/drone_listing")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registerUser(req,res){
    const {name,email,password,role} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User Already Exists"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password : hash,
        role
    })

    const token  = jwt.sign({
        id: user._id,
        role: user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    return res.status(201).json({
        message:"User register Successfuly",
        user:{
            id:user._id,
            username:user.name,
            email:user.email,
            role:user.role
        }
    })
}

async function loginUser(req,res){
    const { name,email,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {name},
            {email}
        ]
    })
    if(!user){
        return res.status(401).json({
            message:"Invalid Credential"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Credential"
        })
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token )

    res.status(201).json({
        message: "User loggedIn successfuly",
        user:{
            id: user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
}

async function logoutUser(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"User logged out successfuly"
    })
}

async function createDelivery(req,res) {
    const {orderId,senderName,pickupLocation,dropoffLocation,packageWeight,droneId,deliveryStatus} = req.body

    const isDeliveryExists = await deliveryModel.findOne({
        orderId,
        userId:req.user.id
    })

    if(isDeliveryExists){
        return res.status(409).json({
            message:"Delivery Request Already Exists"
        })
    }

    const delivery = await deliveryModel.create({
        orderId,
        senderName,
        pickupLocation,
        dropoffLocation,
        packageWeight,
        droneId,
        deliveryStatus,
        userId: req.user.id
    })

    return res.status(201).json({
        message:"Delivery Requested Successfully",
        delivery:{
            id:delivery._id,
            orderId:delivery.orderId,
            pickupLocation:delivery.pickupLocation,
            dropoffLocation:delivery.dropoffLocation,
            packageWeight:delivery.packageWeight,
            droneId:delivery.droneId,
            status:delivery.status,
            userId:delivery.userId
        }
    })
}

async function viewAllDelivery(req, res) {
    const deliveries = await deliveryModel.find({
        userId: req.user.id
    });
    res.status(200).json({
        deliveries
    });
}

module.exports = {registerUser,loginUser,logoutUser,createDelivery,viewAllDelivery}

