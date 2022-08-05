const mongoose = require('mongoose')

const syllabusSchema = mongoose.Schema({
   domain: {
    type: String,
    required: [true, 'Please add domain name']
   }, 
   week: {
    type: String,
    required: [true, 'Please add week']
   }, 
   curriculam: {
    type: Array,
    required: [true, 'Please add questions']
   },    
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Syllabus', syllabusSchema)
