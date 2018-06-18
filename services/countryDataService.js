'use strict'

var request = require("request");
var Q = require('q');

exports.getAll = function(options) {
    var deferred = Q.defer();
    var options = {
        method: 'GET',
        url: 'https://restcountries.eu/rest/v1/region/Europe'
    };
    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        deferred.resolve(JSON.parse(body));
    });
    return deferred.promise;
}