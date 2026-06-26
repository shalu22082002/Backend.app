const mongoose = require("mongoose")
require('dotenv').config()


const connectDB = async ()=>{
    await mongoose.connect(process.env.DB_CONNECT).then(
        console.log("AbhiDB Connected successfully - ready for transactions !")
    )
}

module.exports = connectDB