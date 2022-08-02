const express = require('express')
const router = express.Router()
const { loginStaff, editStaff, fetchBatchs, fetchStaffs, addGroup, fetchMyGroups, fetchReviewGroups,
     fetchMyStudents, fetchMyStudent, addReviewer, fetchReviewer, addReview, } = require('../controllers/staffController')

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
router.post('/insert-reviewer', sProtect, addReviewer)
router.get('/fetch-reviewer', sProtect, fetchReviewer)
router.post('/insert-review/:batch/:domain/:id', sProtect, addReview)

module.exports = router