var express = require('express')
var app = express();



var port = process.env.port || 13100

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('blog app listening at http://%s:%s', host, port);
});
