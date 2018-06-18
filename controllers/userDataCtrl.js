'use strict'

var userDataService = require('../services/userDataService');

exports.save = function(data) {
    return userDataService.save(data);
}

exports.getById = function(id) {
    return userDataService.getById(id);
}

exports.getAll = function(options) {
    return userDataService.getAll(options);
}