const express = require('express')
const router = express.Router()
const { loginStaff, editStaff, fetchBatchs, fetchStaffs, addGroup, fetchMyGroups, fetchReviewGroups,
     fetchMyStudents, fetchMyStudent, } = require('../controllers/staffController')

const {sProtect} = require('../middleware/authMiddleware')

router.post('/login', loginStaff)
router.put('/change-profile', sProtect, editStaff)
router.get('/fetch-batchs', fetchBatchs)
router.get('/fetch-staffs', fetchStaffs)
router.post('/insert-group', sProtect, addGroup)
router.get('/fetch-mygroups', sProtect, fetchMyGroups)
router.get('/fetch-reviewgroups', sProtect, fetchReviewGroups)
router.get('/fetch-mystudents/:batch/:domain', sProtect, fetchMyStudents)
router.get('/fetch-mystudent/:batch/:domain/:id', sProtect, fetchMyStudent)

module.exports = router