const mongoose = require('mongoose')

const batchSchema = mongoose.Schema({
   batch_name: {
    type: String,
    required: [true, 'Please add batch name'],
    unique: true
   },
   location: {
    type: String,
    required: [true, 'Please select the location']
   }, 
   advisor: {
    type: String,
    required: [true, 'Please add advisor name']
   },
   starting: {
    type: String,
    required: [true, 'Please add starting date']
   },
   ending: {
      type: String,
      required: [true, 'Please add ending date']
   },
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Batch', batchSchema)
