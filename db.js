var Engine = require('tingodb')();

var db = new Engine.Db(__dirname + '/db', {});
var collection = db.collection('collection');

exports._collection = collection;
exports.collection = {
    readAll: readAll,
    add: add,
    del: del,
    update: update,
    read: read
};

function add(obj, callback) {
    collection.insert({
        data: obj
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
            data: data
        }
    }, callback);
}

function read(id, callback) {
    collection.findOne({
        _id: id
    }, callback);
}


function readAll(callback) {
    collection.find({}).toArray(callback);
}
