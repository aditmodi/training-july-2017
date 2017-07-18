var fs = require('fs');
let newlines;
function numberNew(callback){
  fs.readFile(process.argv[2],function doneReading(err, fileContents){
    let lines = fileContents.toString();
    newlines = lines.split(/\n/);
    callback();
  });
}
numberNew(logMyNumber);
function logMyNumber(){
  console.log(newlines.length-1);
}
