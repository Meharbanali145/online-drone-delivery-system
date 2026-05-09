const express = require("express")
const userControllers = require("../controllers/auth.user")
const adminControllers = require("../controllers/auth.admin")
const authMiddleswares = require("../middlewares/auth.middlewares")
const validateInput = require("../middlewares/validation.middlewares")
const router = express.Router()


router.get("/getDrone",adminControllers.getAllDrone)

router.post("/register",validateInput.registerUserValidationRules,userControllers.registerUser)
router.post("/login",userControllers.loginUser)
router.post("/logout",userControllers.logoutUser)

router.post("/orders",authMiddleswares.authUser,userControllers.createDelivery)
router.get("/allOrders",authMiddleswares.authUser,userControllers.viewAllDelivery)

module.exports = router

