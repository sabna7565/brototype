const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc  Register new user
// @route  POST /api/users
// @access Prublic

const registerUser = asyncHandler(async (req, res) => {
    const { name, batch, qualification, adhar_no, address, email, mobile, password } = req.body
    

    if(!name || !batch || !qualification || !adhar_no || !address || !email || !mobile || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name, batch, qualification, adhar_no, address, email, mobile, password:hashedPassword
    })

    if(user) {
        res.status(201).json({
           _id: user.id,
           name: user.name,
            batch: user.batch, 
            qualification: user.qualification,
            adhar_no: user.adhar_no, 
            address: user.address, 
            email: user.email,
            mobile: user.mobile, 
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc  Authenticate a user
// @route  POST /api/users/login
// @access Prublic

const loginUser = asyncHandler(async (req, res) => {
   const {email, password} = req.body

   // Check for user email
   const user = await User.findOne({email})    

   if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
        _id: user.id,
        name: user.name,
        batch: user.batch, 
        qualification: user.qualification,
        adhar_no: user.adhar_no, 
        address: user.address, 
        email: user.email,
        mobile: user.mobile, 
        token: generateToken(user._id),
    })     
   } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// @desc  Get user data
// @route  GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
    const {_id, name, batch, qualification, adhar_no, address, email, mobile} = await User.findById(req.user.id)
    
    res.status(200).json({ id: _id, name, batch, qualification, adhar_no, address, email, mobile, })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser, loginUser, getMe
}