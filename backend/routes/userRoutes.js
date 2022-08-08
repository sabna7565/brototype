const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, editUser, fetchSyllabus, addTask, fetchTask, fetchModalTask, fetchReview, } = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.put('/change-details', protect, editUser)
router.get('/fetch-syllabus/:domain/:week',protect, fetchSyllabus)
router.post('/add-task/:id/:domain/:week', protect, addTask)
router.get('/fetch-task/:id', protect, fetchTask)
router.get('/fetch-taskmodal/:id', protect, fetchModalTask)
router.get('/fetch-review/:id', protect, fetchReview)


module.exports = router