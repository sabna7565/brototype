const express = require('express')
const router = express.Router()
const { loginAdmin, getMe, fetchUsers, fetchUser, deleteUser, addStaff, fetchStaffs, deleteStaff, addDesignation, 
    fetchdesignation, addBranch, fetchBranchs, fetchBranch, addBatch, fetchBatchs, addSyllabus, fetchSyllabus,
    fetchModalSyllabus, } = require('../controllers/adminController')

const { isAdmin}  = require('../middleware/authMiddleware')

// router.post('/adminregister', registerAdmin)
router.post('/login', loginAdmin)
router.get('/adminme', isAdmin, getMe)
router.get('/fetch-users', fetchUsers)
router.get('/fetch-user/:id', fetchUser)
router.delete('/delete-user/:id', deleteUser)
router.post('/add-staff', addStaff)
router.get('/fetch-staffs', fetchStaffs)
router.delete('/delete-staff/:id', deleteStaff)
router.post('/add-designation', addDesignation)
router.get('/fetch-designations', fetchdesignation)
router.post('/add-branch', addBranch)
router.get('/fetch-branchs', fetchBranchs)
router.get('/fetch-branch/:location', fetchBranch)
router.post('/add-batch', addBatch)
router.get('/fetch-batchs', fetchBatchs)
router.post('/add-syllabus', addSyllabus)
router.get('/fetch-syllabus', fetchSyllabus)
router.get('/fetch-syllabusmodal/:id', fetchModalSyllabus)

module.exports = router