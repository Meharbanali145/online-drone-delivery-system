const express = require("express")
const adminControllers = require("../controllers/auth.admin")
const authMiddlewares = require("../middlewares/auth.middlewares")
const router = express.Router()

router.post("/addDrone",authMiddlewares.authAdmin,adminControllers.addDrone)
router.get("/getDrone",adminControllers.getAllDrone)
router.patch("/update/:droneId",authMiddlewares.authAdmin,adminControllers.updateDrone)

router.get("/pending",authMiddlewares.authAdmin,adminControllers.seeOrders)
router.patch("/assign/:orderId",authMiddlewares.authAdmin,adminControllers.assignDrone)

module.exports = router