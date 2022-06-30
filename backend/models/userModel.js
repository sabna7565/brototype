const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, 'Please add a name']
   }, 
   batch: {
    type: String,
    required: [true, 'Please add your batch']
   }, 
   qualification: {
    type: String,
    required: [true, 'Please add qualification']
   },
   adhar_no: {
    type: String,
    required: [true, 'Please add your adhar number']
   },
   address: {
    type: String,
    required: [true, 'Please add address']
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
  
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('User', userSchema)
