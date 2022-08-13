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
   domain: {
      type: String,
      // required: [true, 'Please add your domain']
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
   dob: {
      type: String,
   },
   age: {
      type: Number,
   },
   gender: {
      type: String,
   },
   father: {
      type: String,
   },
   fcontact: {
      type: String,
   },
   mother: {
      type: String,
   },
   guardian: {
      type: String,
   },
   relationship: {
      type: String,
   },
   address: {
      type: String,
   }, 
   village: {
      type: String,
   },
   taluk: {
      type: String,
   },
   qualification: {
      type: String,
   },
   college: {
      type: String,
   },
   experience: {
      type: String,
   },
   company: {
      type: String,
   },
   designation: {
      type: String,
   },
   week: {
      type: String,
      default: 'week0'
   },
   profile_image: {
      type: String,
   },
   proof_image: {
      type: String,
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('User', userSchema)


