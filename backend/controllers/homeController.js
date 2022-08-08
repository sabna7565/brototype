const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Placement = require('../models/placementModel')


// @desc  Get placement list
// @route  GET /api/admin/placement
const fetchPlacement = asyncHandler(async (req,res) =>{
    const placement = await Placement.find({});

    if(placement) {
        res.status(200).json({
            placement,
        });
    } else {
        res.status(400);
        throw new Error('Cannot fetch placement due some errors');
    }
})
module.exports = {
 fetchPlacement,
}