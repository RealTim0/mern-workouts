const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const validator = require('validator')
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn :'3d'})
}

////////////////////// ///////////////////////////////////
const loginUser = asyncHandler(async (req, res) =>{
    const {email ,  password} = req.body

    if(!email || !password){
        return res.status(400).json({mss:"all fields are required"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({mss:"Incorrect email "})
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        return res.status(400).json({mss:"wrong password"})
    }else{
        const token = createToken(user._id)
       res.status(200).json({email, token})
    }
})


/////////////////////////////////////////////////////
const signupUser = asyncHandler(async (req, res) =>{
    const {email ,username,  password} = req.body

    if(!username || !email || !password){
        return res.status("400").json({mss:"all fields are required"})
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({mss:`${email} is an invalid email`})
    }
    if(!validator.isStrongPassword(password)){
        return res.status(400).json({mss:`weak pasword`})
    }
    const duplicate = await User.findOne({email})
    if(duplicate){
        return res.status(400).json({mss:"email  is already registered"})
    }
    const hashedPwd = await bcrypt.hash(password, 10)

    const user = await User.create({email , username , 'password':hashedPwd})
    const token = createToken(user._id)

   
    if(user){
        res.status(200).json({email, token})
    }else{
        return res.status(400).json({mss:"failed to create a new user"})
    }

})

module.exports =  {
    loginUser,
    signupUser
}