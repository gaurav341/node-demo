var mongoose = require('./mongoose').getMongoos();

var models = {};

exports.init = function() {
    models.userData = require(__dirname + '/mongo_models/userData')(mongoose);
    return models;
};

exports.getModels = function() {
    return models;
}