const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    student: {
    type: String,
    required: [true, 'Please add student id'],
   },
   domain: {
    type: String,
    required: [true, 'Please select domain']
   }, 
   week: {
    type: String,
    required: [true, 'Please add week']
   },
   curriculam: {
    type: Array,
    required: [true, 'Please add full tasks']
   },
   
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Task', taskSchema)
