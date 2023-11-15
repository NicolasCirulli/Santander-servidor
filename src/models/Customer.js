const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: { type : String , required : true},
    lastName : { type : String , required : true},
    age : { type : Number , required : true},
    pets : [ String ]
})

const Customer = mongoose.model('Customer' , customerSchema)

module.exports = Customer