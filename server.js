const express = require('express')
const dbConnect = require('./config/datatbase')
const cloudinaryConnect = require('./config/cloudinary')
require('dotenv').config()
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json)
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp'
}))

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server is running on port", PORT)
})

cloudinaryConnect()
dbConnect()
