'use strict'

var countryDataService = require('../services/countryDataService');

exports.getAll = function() {
    return countryDataService.getAll();
}