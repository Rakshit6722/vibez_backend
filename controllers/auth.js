const User = require('../models/User')
const Posts = require('../models/Posts')

exports.signUp = async (req, res) => {
    try{
        const {userName, email, password} = req.body
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error"})
    }
}