const mongoose = require('mongoose')

const placementSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, 'Please add student name'],
    unique: true
   },
   batch: {
    type: String,
    required: [true, 'Please add student batch']
   }, 
   domain: {
    type: String,
    required: [true, 'Please add domain']
   },
   company: {
    type: String,
    required: [true, 'Please add company'],
    unique: true
   },
   designation: {
    type: String,
    required: [true, 'Please add designation']
   }, 
   lpa: {
    type: String,
    required: [true, 'Please add lpa']
   },
   photo: {
    type: String,
    required: [true, 'Please add student photo']
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Placement', placementSchema)
