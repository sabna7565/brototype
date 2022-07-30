const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
   fname: {
    type: String,
    required: [true, 'Please add first name']
   }, 
   lname: {
    type: String,
    required: [true, 'Please add last name']
   }, 
   designation: {
    type: String,
    required: [true, 'Please add staffs designation']
   }, 
   salary: {
    type: Number,
    required: [true, 'Please add staff salary']
   },   
   email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
   },
   mobile: {
    type: Number,
    required: [true, 'Please add a contact number']
   },
   password: {
    type: String,
    required: [true, 'Please add a password']
   },
   sprofile: {
      type: String,
      
   }
  
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Staff', staffSchema)
