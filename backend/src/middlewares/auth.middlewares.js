const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function authCustomer(req,res,next){
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role !== "customer"){
            return res.status(403).json({
                message:"You don't have access"
            })
        }

        req.user = decoded

        next()
    }catch(err){
        console.log(err)
    }
}

async function authAdmin(req,res,next){
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role !== "admin"){
            return res.status(403).json({
                message:"You don't have access"
            })
        }

        req.user = decoded

        next()
    }catch(err){
        console.log(err)
        return res.status(401).json({ message: "Unauthorized" });
    }
}


async function authUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}


module.exports = {authCustomer,authAdmin,authUser}