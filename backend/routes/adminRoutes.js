const express = require('express')
const router = express.Router()
const { loginAdmin, getMe, fetchUsers} = require('../controllers/adminController')

const { isAdmin}  = require('../middleware/authMiddleware')

// router.post('/adminregister', registerAdmin)
router.post('/login', loginAdmin)
router.get('/adminme', isAdmin, getMe)
router.get('/fetch-users', fetchUsers)

module.exports = router