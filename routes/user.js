'use strict';

module.exports = function(app) {
    var controller = require('../controllers/userDataCtrl');

    app.post('/userData', function(req, res) {
        var requestData = req.body;
        controller.save(requestData).then(function(data) {
        	res.send(data);
        });
    });

    app.get('/userData', function(req, res) {
        var query = req.query;
        controller.getAll(query).then(function(data) {
        	res.send(data);
        });
    });

    app.get('/userData/:id', function(req, res) {
        var params = req.params;
        controller.getById(params.id).then(function(data) {
        	res.send(data);
        });
    });
}