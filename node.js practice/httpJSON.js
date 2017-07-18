var http = require('http');
var url = require('url');

function parseTime(time){
  return{
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  }
}

function unixTime(time){
  return{
    unixtime : time.getTime()
  }
}

var server = http.createServer(function(request,response){
  var parsedUrl = url.parse(request.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result;
  if(/^\/api\/parsetime/.test(request.url)){
    result = parseTime(time);
  }
  else if (/^\/api\/unixtime/.test(request.url)) {
    result = unixTime(time);
  }

  if(result){
    response.writeHead(200, {'Content-type' : 'application/json'});
    response.end(JSON.stringify(result))
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(Number(process.argv[2]));
