const express = require('express')
const router = express.Router()
const { fetchPlacement,} = require('../controllers/homeController')

router.get('/fetch-placement', fetchPlacement)

module.exports = router