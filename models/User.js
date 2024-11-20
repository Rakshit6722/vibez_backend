const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:55,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        maxLength:255,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts',
    }],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('User', userSchema)
