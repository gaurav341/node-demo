'use strict';
let mongoose = require('mongoose');

exports.init = function (CONFIG) {
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error: '));

	db.once('open', function callback() {
		console.info('Connected to DB');
	});

	mongoose.connect(CONFIG.mongo.localHost, CONFIG.mongo.options);

	return mongoose;
}

exports.getMongoos = function () {
	return mongoose;
}

exports.getConnection = function () {
	return mongoose.connection;
}
