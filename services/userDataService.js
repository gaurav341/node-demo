'use strict'

var models = require('../daos/mongodb/models').getModels();
var Q = require('q');

exports.save = function(data) {
    var deferred = Q.defer();
    var userData = new models.userData(data);
    userData.save(function(err, doc) {
        deferred.resolve({
            err: err,
            doc: doc
        });
    });
    return deferred.promise;
}

exports.getAll = function(options) {
    var deferred = Q.defer();
    models.userData.find({}).sort([
        ['name', 'ascending']
    ]).exec(function(err, userData) {
        deferred.resolve({
            err: err,
            data: userData
        });
    });
    return deferred.promise;
}

exports.getById = function(id) {
    var deferred = Q.defer();
    models.userData.findOne({
        "_id": id
    }).exec(function(err, userData) {
        deferred.resolve({
            err: err,
            data: userData
        });
    });
    return deferred.promise;
}