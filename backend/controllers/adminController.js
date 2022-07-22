const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')
const Staff = require('../models/staffModel')
const Designation = require('../models/designationModel')
const Branch = require('../models/branchModel')
const Batch = require('../models/batchModel')
const moment = require('moment');


// @desc  Authenticate a user
// @route  POST /api/admin/login
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


// @desc  Get single user data
// @route  GET /api/admin/user/id
// @access Private
const fetchUser = asyncHandler(async (req,res) =>{
    const userId = req.params.id;
    const user = await User.findById(userId);

    if(user) {
        res.status(200).json({
            user,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch users due some errors');
    }
})

// @desc  delete a student
// @route  GET /api/admin/staffs/delete
const deleteUser = asyncHandler(async (req,res) =>{
    const userId = req.params.id;
    try{
        const user = await User.findById(userId);
        const data = await user.remove();
        res.status(200).json({ userId: data._id });
    } catch (error) {
        res.json(error);
        throw new Error('Cannot fetch staff due some errors');
    }
})


// @desc  Staff registration
// @route  GET /api/admin/staff/new
const addStaff = asyncHandler(async (req, res) => {
    const { fname, lname, designation, salary, email, mobile, password } = req.body
    

    if(!fname || !lname || !designation || !salary || !email || !mobile || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if staff exists
    const staffExists = await Staff.findOne({email})

    if(staffExists) {
        res.status(400)
        throw new Error('Staff already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const staff = await Staff.create({
        fname, lname, designation, salary, email, mobile, password:hashedPassword
    })

    if(staff) {
        res.status(201).json({
           _id: staff.id,
           fname: staff.fname,
           lname: staff.lname, 
           designation: staff.designation,
           salary: staff.salary,
            email: staff.email,
            mobile: staff.mobile, 
            token: generateToken(staff._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid staff data')
    }
})

// @desc  Get staff list
// @route  GET /api/admin/staffs
// @access Public
const fetchStaffs = asyncHandler(async (req,res) =>{
    const staffs = await Staff.find({});

    if(staffs) {
        res.status(200).json({
            staffs,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch users due some errors');
    }
})


// @desc  delete a staff 
// @route  GET /api/admin/staffs/delete
// @access Public
const deleteStaff = asyncHandler(async (req,res) =>{
    const staffId = req.params.id;

    try{
        const staff = await Staff.findById(staffId);
        const data = await staff.remove();
        res.status(200).json({ staffId: data._id });
    } catch (error) {
        res.json(error);
        throw new Error('Cannot fetch staff due some errors');
    }
})

// @desc  designation insertion
// @route  GET /api/admin/designation
const addDesignation = asyncHandler(async (req, res) => {
    const {  designame } = req.body
    

    if( !designame ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if staff exists
    const designationExists = await Designation.findOne({designame})

    if(designationExists) {
        res.status(400)
        throw new Error('Designation already exists')
    }
    
    //Create designation
    const designation = await Designation.create({
        designame
    })

    if(designation) {
        res.status(201).json({
           _id: designation.id,
           designame: designation.designame,
        })
    } else {
        res.status(400)
        throw new Error('Invalid designation data')
    }
})

// @desc  Get designation list
// @route  GET /api/admin/designation
// @access Public
const fetchdesignation = asyncHandler(async (req,res) =>{
    const designation = await Designation.find({});

    if(designation) {
        res.status(200).json({
            designation,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch designation due some errors');
    }
})


// @desc  branch insertion
// @route  GET /api/admin/branch/new
const addBranch = asyncHandler(async (req, res) => {
    const { branch_name, location, address, branch_image } = req.body
    

    if(!branch_name || !location || !address || !branch_image ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if staff exists
    const branchExists = await Branch.findOne({branch_name})

    if(branchExists) {
        res.status(400)
        throw new Error('Branch already added')
    }

    //Create branch
    const branch = await Branch.create({
        branch_name, location, address, branch_image
    })

    if(branch) {
        res.status(201).json({
           _id: branch.id,
           branch_name: branch.branch_name,
           location: branch.location, 
           address: branch.address,
           branch_image: branch.branch_image,
        })
    } else {
        res.status(400)
        throw new Error('Invalid branch details')
    }
})

// @desc  Get branch list
// @route  GET /api/admin/branches
// @access Public
const fetchBranchs = asyncHandler(async (req,res) =>{
    const branch = await Branch.find({});

    if(branch) {
        res.status(200).json({
            branch,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch branchs due some errors');
    }
})

// @desc  Get branch list
// @route  GET /api/admin/branches
// @access Public
const fetchBranch = asyncHandler(async (req,res) =>{
    const locname = req.params.location;
    const branch = await Branch.find({location: locname});

    if(branch) {
        res.status(200).json({
            branch,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch branchs due some errors');
    }
})

// @desc  batch insertion
// @route  GET /api/admin/batch/new
const addBatch = asyncHandler(async (req, res) => {
    const { batch_name, location, advisor, starting } = req.body
    

    if(!batch_name || !location || !advisor || !starting ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if batch exists
    const batchExists = await Batch.findOne({batch_name})

    if(batchExists) {
        res.status(400)
        throw new Error('Batch already added')
    }

    let endday= await moment(starting).subtract(-168,'days').format('YYYY/MM/DD')
    console.log("end day", endday)

    //Create batch
    const batch = await Batch.create({
        batch_name, location, advisor, starting, ending:endday
    })

    if(batch) {
        res.status(201).json({
           _id: batch.id,
           batch_name: batch.batch_name,
           location: batch.location, 
           advisor: batch.advisor,
           starting: batch.starting,
           ending: batch.ending,
 
        })
    } else {
        res.status(400)
        throw new Error('Invalid Batch details')
    }
})

// @desc  Get staff list
// @route  GET /api/admin/staffs
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
module.exports = {
    loginAdmin, getMe, fetchUsers, fetchUser, deleteUser, addStaff, fetchStaffs, 
    deleteStaff, addDesignation, fetchdesignation,  addBranch, fetchBranch,
    fetchBranchs, addBatch, fetchBatchs, 
}