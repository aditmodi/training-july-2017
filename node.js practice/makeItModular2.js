var moduleCall = require('./makeItModular1.js');

moduleCall(process.argv[2], process.argv[3], function(err,data){
  for(var i in data){
    console.log(data[i]);
  }
});
