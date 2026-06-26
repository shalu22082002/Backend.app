const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express()
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
const connectDB = require("./config/db")

connectDB();
app.use(cors())
app.use("/api/v1/rrcollege/user",userRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`)
})

