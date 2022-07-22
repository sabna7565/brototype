const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
   branch_name: {
    type: String,
    required: [true, 'Please add location'],
    unique: true
   },
   location: {
    type: String,
    required: [true, 'Please select your location']
   }, 
   address: {
    type: String,
    required: [true, 'Please add exact address']
   },
   branch_image: {
    type: String,
    required: [true, 'Please add your adhar number']
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Branch', branchSchema)
