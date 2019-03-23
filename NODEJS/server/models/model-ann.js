var mongoose = require('mongoose')

const annSchema={title:String, ann:String}
const ann = mongoose.model('announcements', annSchema );

module.exports=ann