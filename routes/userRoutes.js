const express = require("express")
const multer = require('multer')
const {register,loginUser,getProfile, uplodeImg} = require("../controllers/userControllers")
const checkRequest = require("../middleware/authMiddleware")
const Uplode=require("../middleware/Uplode")
const router = express.Router()

router.post("/register",register)

//router.get("/getUsers",getUsers)

router.post("/login",loginUser)
router.post("/UplodeImage",Uplode.single("file"),uplodeImg)

router.get("/profile",checkRequest,getProfile)


module.exports = router

