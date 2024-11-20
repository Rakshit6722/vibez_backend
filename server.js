const express = require('express')
const dbConnect = require('./config/datatbase')
const cloudinaryConnect = require('./config/cloudinary')
require('dotenv').config()

const app = express()

app.use(express.json)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server is running on port", PORT)
})

cloudinaryConnect()
dbConnect()
