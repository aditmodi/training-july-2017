var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : { type : String, unique : true},
  email : { type : String, validate : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, unique : true },
  name : { type : String, validate : /^[a-zA-Z0-9_]*$/, unique : true },
  password : { type : String},
  role : { type : String }
});

module.exports = mongoose.model('Users', userSchema);
