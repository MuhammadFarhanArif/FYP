var mongoose = require('mongoose')

const citizensSchema={name:String, cnic:Number, phoneno:Number, flatno:String}
const soc = mongoose.model('society', citizensSchema );

module.exports=soc