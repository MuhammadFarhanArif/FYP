var mongoose = require('mongoose')

const empSchema={ename:String, ecnic:Number, ephoneno:Number, expert:String}
const emp= mongoose.model('employees', empSchema)

module.exports=emp