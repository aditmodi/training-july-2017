var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('we are connected');
  var schema = mongoose.Schema({
    name:String
  })
  schema.methods.speak = function(){
    var greeting = this.name ? "my name is " + this.name : "i dont have a name";
    console.log(greeting);
  }
  var mySchema = mongoose.model('mySchema', schema);
  var adit = new mySchema({name : "Adit"})
  console.log(adit.name);
  adit.save(function(err, adit){
    if(err){console.error(err);}
    adit.speak();
  })
})
