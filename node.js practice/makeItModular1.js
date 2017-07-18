module.exports = function (dirName, extension, callback){
  var fs = require('fs');
  var path = require('path');

  var results = new Array();

  fs.readdir(dirName,function(err,list){
    if(err){
      return callback(err);
    }
    else {
      for(var i in list){
          if(path.extname(list[i]) == '.' + extension){
            results.push(list[i]);
          }
      }
    }
    callback(null,results);
  });
}
