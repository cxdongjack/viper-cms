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

// collection
var db= require('./db.js');
server.get('/collection/:id', function(req, res, next) {
    db.collection.read(req.params.id, function(err, data) {
        if (!data) {
            return res.send(404);
        }
        res.send(data);
        return next();
    });
});

server.post('/collection', function(req, res, next) {
    db.collection.add(req.body, function(err, data) {
        res.send(data);
        return next();
    });
});

server.patch('/collection/:id', function(req, res, next) {
    db.collection.update(req.params.id, req.body, function(err, data) {
        res.send(data);
        return next();
    });
});

server.del('/collection/:id', function(req, res, next) {
    db.collection.del(req.params.id, function(err, data) {
        res.send(data);
        return next();
    });
});

// proxy
server.post('/proxy', function(req, res, next) {
	// 解析参数，使用httpclient转发请求
    // proxy args: url, method, body, [headers]
    var method = (req.body.method || 'get').toLowerCase();
    // i.e. http://restify.com/#jsonclient
    // origin: http://restify.com
    // path: /#jsonclient
    var match = req.body.url.match(/(https?:\/\/[^/]+)(\/.*)?$/);
    var origin, path;
    if (match) {
        origin = match[1];
        path = match[2] || '/';
    }

    var client = restify.createJsonClient({
          url: origin
    });

    var handler = function(err, req2, res2, obj) {
        res.send(obj);
        return next();
    }

    var args = [path];
    if (method == 'post' || method == 'put') {
        args.push(req.body.body);
    }
    args.push(handler);

    client[method].apply(client, args);
});

server.listen(8081, function() {
    console.log('%s listening at %s', server.name, server.url);
});
