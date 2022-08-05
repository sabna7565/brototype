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
      // required: [true, 'Please add date of birth']
   },
   age: {
      type: Number,
      // required: [true, 'Please add your age']
   },
   gender: {
      type: String,
      // required: [true, 'Please add gender']
   },
   father: {
      type: String,
      // required: [true, 'Please add father name']
   },
   fcontact: {
      type: String,
      // required: [true, 'Please add father contact number']
   },
   mother: {
      type: String,
      // required: [true, 'Please add mother name']
   },
   guardian: {
      type: String,
      // required: [true, 'Please add guardian name']
   },
   relationship: {
      type: String,
      // required: [true, 'Please add relationship with guardian']
   },
   address: {
      type: String,
      // required: [true, 'Please add address']
   }, 
   village: {
      type: String,
      // required: [true, 'Please add village']
   },
   taluk: {
      type: String,
      // required: [true, 'Please add taluk']
   },
   qualification: {
      type: String,
      // required: [true, 'Please add qualification']
   },
   college: {
      type: String,
      // required: [true, 'Please add college name']
   },
   experience: {
      type: String,
      // required: [true, 'Please add experienc(if any)']
   },
   company: {
      type: String,
      // required: [true, 'Please add company name']
   },
   designation: {
      type: String,
      // required: [true, 'Please add designation']
   },
   week: {
      type: String,
      default: 'week0'
   },
   profile_image: {
      type: String,
      // required: [true, 'Please add your profile photo']
   },
   proof_image: {
      type: String,
      // required: [true, 'Please add your adhar card or id card']
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('User', userSchema)


