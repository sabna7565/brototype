const mongoose = require('mongoose')

const reviwerSchema = mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Please add reviwer name'],
   },
   email: {
    type: String,
    unique: true,
    required: [true, 'Please select reviwer email']
   }, 
   mobile: {
    type: String,
    required: [true, 'Please add mobile number']
   },
   company: {
    type: String,
    required: [true, 'Please add reviwers company']
   },
   designation: {
    type: String,
    required: [true, 'Please add designaion of reviwer']
   },
   pic: {
    type: String,
    required: [true, 'Please add image of reviwer']
   },
   
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Reviwer', reviwerSchema)
