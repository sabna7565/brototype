const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')


// @desc  Authenticate a user
// @route  POST /api/users/login
// @access Prublic

const loginAdmin = asyncHandler(async (req, res) => {
   const {email, password} = req.body

//    if(!email || !password) {
//     res.status(400)
//     throw new Error('Please add all fields')
//    }

   // Check for user email
   const admin = await Admin.findOne({email})    

   if(admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
        _id: admin.id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id),
    })     
   } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }
})


// @desc  Get user data
// @route  GET /api/admin/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email } = await Admin.findById(req.admin.id)
    
    res.status(200).json({ id: _id, name, email,  })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// @desc  Get user data
// @route  GET /api/admin/users
// @access Private
const fetchUsers = asyncHandler(async (req,res) =>{
    const users = await User.find({});

    if(users) {
        res.status(200).json({
            users,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch users due some errors');
    }
})


module.exports = {
    loginAdmin, getMe, fetchUsers
}