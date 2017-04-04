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


server.get('/scheme/:id', function(req, res, next) {
    res.send(req.params);
    return next();
});

server.post('/scheme', function(req, res, next) {
    //req.log.info({body: req.body}, 'Hello there %s', 'foo');
    console.log(req.body);
    res.send();
    return next();
});

server.patch('/scheme/:id', function(req, res, next) {
    res.send(req.params);
    return next();
});

server.del('/scheme/:id', function(req, res, next) {
    res.send(req.params);
    return next();
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
