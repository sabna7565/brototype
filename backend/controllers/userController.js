const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// const { findByIdAndUpdate } = require('../models/userModel')
const Task = require('../models/taskModel')
const Syllabus = require('../models/syllabusModel')

// @desc  Register new user
// @route  POST /api/users
// @access Prublic

const registerUser = asyncHandler(async (req, res) => {
    const { name, batch,  email, mobile, password } = req.body
    

    if(!name || !batch || !email || !mobile || !password) {
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
        name, batch, email, mobile, password:hashedPassword
    })

    if(user) {
        res.status(201).json({
           _id: user.id,
           name: user.name,
            batch: user.batch, 
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
        email: user.email,
        mobile: user.mobile, 
        token: generateToken(user._id),
        dob: user.dob,
        age: user.age,
        domain: user.domain,
        gender: user.gender,
        father: user.father,
        fcontact: user.fcontact,
        mother: user.mother,
        guardian: user.guardian,
        relationship: user.relationship,
        address: user.address,
        village: user.village,
        taluk: user.taluk,
        qualification: user.qualification,
        college: user.college,
        experience: user.experience,
        company: user.company,
        designation: user.designation,
        week: user.week,
        proof_image: user.proof_image,
        profile_image: user.profile_image
    })     
   } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc  update user details
// @route  PUT /api/users/more/:id
// @access Private
const editUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    try{
        const updateUserData = {
            dob: req.body.dob,
            age: req.body.age,
            domain: req.body.domain,
            gender: req.body.gender,
            father: req.body.father,
            fcontact: req.body.fcontact,
            mother: req.body.mother,
            guardian: req.body.guardian,
            relationship: req.body.relationship,
            address: req.body.address,
            village: req.body.village,
            taluk: req.body.taluk,
            qualification: req.body.qualification,
            college: req.body.college,
            experience: req.body.experience,
            company: req.body.company,
            designation: req.body.designation,
            proof_image: req.body.proof_image,
        }

        const user = await User.findByIdAndUpdate(userId, updateUserData, {
            new: true
        })
        res.status(200).json({
            _id: user.id,
            name: user.name,
            batch: user.batch, 
            email: user.email,
            mobile: user.mobile, 
            token: generateToken(user._id),
            dob: user.dob,
            age: user.age,
            domain: user.domain,
            gender: user.gender,
            father: user.father,
            fcontact: user.fcontact,
            mother: user.mother,
            guardian: user.guardian,
            relationship: user.relationship,
            address: user.address,
            village: user.village,
            taluk: user.taluk,
            qualification: user.qualification,
            college: user.college,
            experience: user.experience,
            company: user.company,
            designation: user.designation,
            proof_image: user.proof_image,
            week: user.week,
        })
    } catch (error) {
        res.status(400).json(error);
    }
})

// @desc  Get user data
// @route  GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
    const {_id, name, batch, qualification, address, email, mobile} = await User.findById(req.user.id)
    
    res.status(200).json({ id: _id, name, batch, qualification, address, email, mobile, })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    })
}

// @desc  Get task
// @route  GET /api/user/task
const fetchSyllabus = asyncHandler(async (req,res) =>{
    const syllabusWeek = req.params.week;
    const syllabusDomain = req.params.domain;
    const smodal = await Syllabus.findOne({week: syllabusWeek,domain:syllabusDomain});

    if(smodal) {
        res.status(200).json({
            smodal,
        });

    } else {
        res.status(400);
        throw new Error('Cannot fetch branchs due some errors');
    }
})

// @desc  task registration
// @route  POST /api/user/task/new
const addTask = asyncHandler(async (req, res) => {
    const studentId = req.params.id;
    const syllabusWeek = req.params.week;
    const syllabusDomain = req.params.domain;
    const { formFields } = req.body

    
    if( !formFields ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if task exists
    const taskExists = await Task.findOne({student: studentId,domain: syllabusDomain, week:syllabusWeek})

    if(taskExists) {
        res.status(400)
        throw new Error('Task already exists')
    }
   
    //Create task
    const task = await Task.create({
        student: studentId, domain: syllabusDomain, week:syllabusWeek, curriculam : [...formFields]
    })
      if(task) {
        res.status(201).json({
           _id: task.id,
           student: task.student,
           domain: task.domain,
           week: task.week, 
           curriculam: task.curriculam,           
        })
    } else {
        res.status(400)
        throw new Error('Invalid syllabus data')
    }
})

// @desc  Get task list
// @route  Get /api/user/task
const fetchTask = asyncHandler(async (req,res) =>{
    const studentId = req.params.id;
    const task = await Task.find({student: studentId});

    if(task) {
        res.status(200).json({
            task,
        });

    } else {
        res.status(400);
        throw new Error('Cannot fetch branchs due some errors');
    }
})

// @desc  Get syllabus list
// @route  GET /api/admin/syllabus
const fetchModalTask = asyncHandler(async (req,res) =>{
    const taskId = req.params.id;
    const utask = await Task.findById(taskId);

    if(utask) {
        res.status(200).json({
            utask,
        });

    } else {
        res.status(400);
        throw new Error('Cannot fetch tasks due some errors');
    }
})
module.exports = {
    registerUser, loginUser, getMe, editUser, fetchSyllabus, addTask, fetchTask, fetchModalTask,
}