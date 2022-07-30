const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    batch: {
    type: String,
    required: [true, 'Please add batch name'],
   },
   domain: {
    type: String,
    required: [true, 'Please select domain']
   }, 
   week: {
    type: String,
    required: [true, 'Please add week']
   },
   attachment: {
    type: String,
    required: [true, 'Please add attachment file']
   },
   
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Group', groupSchema)
