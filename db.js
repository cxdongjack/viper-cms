var Engine = require('tingodb')();

var db = new Engine.Db('db', {});
var collection = db.collection('scheme');

exports.scheme = {
    add: add,
    del: del,
    update: update,
    read: read
};

function add(obj, callback) {
    collection.insert({
        body: obj
    }, callback);
}

function del(id, callback) {
    collection.remove({
        _id: id
    }, callback);
}

function update(id, data, callback) {
    collection.update({
        _id: id
    }, {
        $set: {
            body: data
        }
    }, callback);
}

function read(id, callback) {
    collection.findOne({
        _id: id
    }, callback);
}
