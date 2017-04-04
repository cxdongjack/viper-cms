var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var port = 9000;
console.log(`服务器运行在 http://localhost:${port}/`);
server.listen(port);

app.use('/', function(req, res, next) {
    res.send(`${__dirname} OK`);
});
