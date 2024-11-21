const express = require('express')
const dbConnect = require('./config/datatbase')
const authRoutes = require('./routes/auth')
require('dotenv').config()
const fileUpload = require('express-fileupload')
const cloudinaryConnect = require('./config/cloudinary')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp'
}))
app.use(cookieParser())

//Routes
app.use('/api/v1/auth', authRoutes)

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.send("Welcome to the API")
})

app.listen(PORT,()=>{
    console.log("Server is running on port", PORT)
})

cloudinaryConnect()
dbConnect()
