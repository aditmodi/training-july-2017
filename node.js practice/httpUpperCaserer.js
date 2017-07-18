var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response){
  if (request.method != 'POST'){
    return respond.end('not a post');
  }
  else {
    request.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

server.listen(Number(process.argv[2]));
