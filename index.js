var restify = require('restify');
var plugins = require('restify-plugins');


const server = restify.createServer({
    name: 'viper-cms',
    version: '1.0.0'
});
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());
// TODO配置logger
server.use(restify.requestLogger());


var db= require('./db.js');
server.get('/scheme/:id', function(req, res, next) {
    db.scheme.read(req.params.id, function(err, data) {
        if (!data) {
            return res.send(404);
        }
        return next();
    });
});

server.post('/scheme', function(req, res, next) {
    db.scheme.add(req.body, function(err, data) {
        res.send(data);
        return next();
    });
});

server.patch('/scheme/:id', function(req, res, next) {
    db.scheme.update(req.params.id, req.body, function(err, data) {
        res.send(data);
        return next();
    });
});

server.del('/scheme/:id', function(req, res, next) {
    db.scheme.del(req.params.id, function(err, data) {
        res.send(data);
        return next();
    });
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
