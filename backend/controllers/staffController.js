const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Staff = require('../models/staffModel')
const Designation = require('../models/designationModel')
const Branch = require('../models/branchModel')
const Batch = require('../models/batchModel')
const Group = require('../models/groupModel')

// @desc  Authenticate a staff
// @route  POST /api/staff/login
// @access Prublic

const loginStaff = asyncHandler(async (req, res) => {
    const {email, password} = req.body
 
    // Check for user email
    const staff = await Staff.findOne({email})    
 
    if(staff && (await bcrypt.compare(password, staff.password))) {
     res.status(200).json({
         _id: staff.id,
         fname: staff.fname,
         lname: staff.lname,
         designation: staff.designation,
         salary: staff.salary,
         email: staff.email,
         mobile: staff.mobile,
         sprofile: staff.sprofile,
         token: generateToken(staff._id),
     })     
    } else {
         res.status(400)
         throw new Error('Invalid credentials');
     }
 })

 const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    })
}

const editStaff = asyncHandler(async (req,res) => {
    const staffId = req.staff._id;
    try{
        const updateStaffData = {
            sprofile: req.body.sprofile
        }

        const staff = await Staff.findByIdAndUpdate(staffId, updateStaffData, {
            new: true
        })
        res.status(200).json({
            _id: staff.id,
            fname: staff.fname,
           lname: staff.lname, 
           designation: staff.designation,
           salary: staff.salary,
            email: staff.email,
            mobile: staff.mobile,
            token: generateToken(staff._id),
            sprofile: staff.sprofile,
        })
    } catch (error) {
        res.status(400).json(error);
    }
})

// @desc  Get batch list
// @route  GET /api/staff/batch
// @access Public
const fetchBatchs = asyncHandler(async (req,res) =>{
    const batch = await Batch.find({});

    if(batch) {
        res.status(200).json({
            batch,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch batchs due some errors');
    }
})

// @desc  Get staff list
// @route  GET /api/staff/staffs
// @access Public
const fetchStaffs = asyncHandler(async (req,res) =>{
    const staff = await Staff.find({});

    if(staff) {
        res.status(200).json({
            staff,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch batchs due some errors');
    }
})

// @desc  group insertion
// @route  GET /api/staff/group/new
const addGroup = asyncHandler(async (req, res) => {
    const staffId = req.staff._id;
    const staffname = req.staff.fname;


    const {  batch, domain, advisor,  } = req.body

    if( !batch, !domain, !advisor  ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if group exists
    const groupExists = await Group.findOne({batch, domain, advisor})

    if(groupExists) {
        res.status(400)
        throw new Error('Group already exists')
    }
    
    let by = staffId
    console.log("backend", by)


    //Create group
    const group = await Group.create({staffId},{
        batch, domain, advisor, created:by, createdby: staffname,
    })

    if(group) {
        res.status(201).json({
           _id: group.id,
           batch: group.batch,
           domain: group.domain,
           advisor: group.advisor,
           created: group.created,
           createdby: group.createdby,
        })
    } else {
        res.status(400)
        throw new Error('Invalid group data')
    }
})

// @desc  Get mygroup list
// @route  GET /api/staff/group
// @access Public
const fetchMyGroups = asyncHandler(async (req,res) =>{
    const staffId = req.staff._id;
    const group = await Group.find({create: staffId});

    if(group) {
        res.status(200).json({
            group,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch group due some errors');
    }
})

// @desc  Get myreviewgroup list
// @route  GET /api/staff/group
// @access Public
const fetchReviewGroups = asyncHandler(async (req,res) =>{
    const staffId = req.staff._id;
    const staffname = req.staff.fname;

    const group = await Group.find({advisor: staffname});

    if(group) {
        res.status(200).json({
            group,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch group due some errors');
    }
})

// @desc  Get mygroup students list
// @route  GET /api/staff/group/mern
const fetchMyStudents = asyncHandler(async (req,res) =>{
    const batchname = req.params.batch;
    const domainname = req.params.domain;
    const staffId = req.staff._id;
    // const users = await User.find({batch: batchname, domain: domainname});
    const users = await User.find({$and:[{batch: batchname},{domain: domainname}]});
    if(users) {
        res.status(200).json({
            users,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch group due some errors');
    }
})

// @desc  Get mygroup student details
// @route  GET /api/staff/group/mern/id
const fetchMyStudent = asyncHandler(async (req,res) =>{
    const batchname = req.params.batch;
    const domainname = req.params.domain;
    const studid = req.params.id;
    const staffId = req.staff._id;
    const users = await User.findOne({$and:[{batch: batchname},{domain: domainname}, {_id:studid}]});
    if(users) {
        res.status(200).json({
            users,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch group due some errors');
    }
})


// @desc  group insertion
// @route  GET /api/staff/group/new
const addTask = asyncHandler(async (req, res) => {
    const staffId = req.staff._id;
    const staffname = req.staff.fname;


    const {  batch, domain, advisor,  } = req.body

    if( !batch, !domain, !advisor  ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if group exists
    const groupExists = await Group.findOne({batch, domain, advisor})

    if(groupExists) {
        res.status(400)
        throw new Error('Group already exists')
    }
    
    let by = staffId
    console.log("backend", by)


    //Create group
    const group = await Group.create({staffId},{
        batch, domain, advisor, created:by, createdby: staffname,
    })

    if(group) {
        res.status(201).json({
           _id: group.id,
           batch: group.batch,
           domain: group.domain,
           advisor: group.advisor,
           created: group.created,
           createdby: group.createdby,
        })
    } else {
        res.status(400)
        throw new Error('Invalid group data')
    }
})
 module.exports = {
    loginStaff, editStaff, fetchBatchs, fetchStaffs, addGroup, fetchMyGroups, fetchReviewGroups, fetchMyStudents,
    fetchMyStudent, 
}