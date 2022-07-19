const mongoose = require('mongoose')

const designationSchema = mongoose.Schema({
   designame: {
    type: String,
    required: [true, 'Please add designation'],
    unique: true
   }  
}, 
{
   timestamps: true 
})

module.exports = mongoose.model('Designation', designationSchema)
