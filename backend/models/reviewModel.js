const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, 'Please add student name'],
   },
   batch: {
    type: String,
    required: [true, 'Please add batch']
   }, 
   domain: {
    type: String,
    required: [true, 'Please add domain']
   },
   date: {
    type: String,
    required: [true, 'Please add reviwe date']
   },
   week: {
    type: String,
    required: [true, 'Please select week']
   },
   status: {
    type: String,
    required: [true, 'Please select status']
   },
   pending: {
   type: String,
   required: [true, 'Please add pending topics']
   },
   updations: {
   type: String,
   required: [true, 'Please add updations']
   },
   reviewer: {
   type: String,
   required: [true, 'Please add reviwer name']
   },
   score: {
   type: Number,
   required: [true, 'Please add review score']
   },
   seminar: {
   type: String,
   required: [true, 'Please add seminar topic']
   },
   semiscore: {
   type: String,
   required: [true, 'Please add seminar score']
   },
   total: {
   type: Number,
   required: [true, 'Please add review score']
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Review', reviewSchema)
