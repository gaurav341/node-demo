'use strict';

module.exports = function(app) {
    var controller = require('../controllers/countryDataCtrl');

    app.get('/countries', function(req, res) {
        controller.getAll().then(function(data) {
        	res.send(data);
        });
    });
}