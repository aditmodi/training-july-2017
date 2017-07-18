var http = require('http');
var bl = require('bl');
var arr = new Array(3);
var count = 0;

function httpGet(i) {
  http.get(process.argv[i+2], function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function(err,data){
      if(err){
        console.err(err);
      }
      arr[i] = data.toString();
      count++;
      if(count == 3)
        printResults(arr);
    }));
  })
}

function printResults(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
