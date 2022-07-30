const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    batch: {
    type: String,
    required: [true, 'Please add batch name'],
   },
   domain: {
    type: String,
    required: [true, 'Please select domain']
   }, 
   advisor: {
    type: String,
    required: [true, 'Please add advisor name']
   },
   created: {
    type: String,
   },
   createdby: {
      type: String,
   }
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Group', groupSchema)
