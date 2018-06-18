'use strict';
let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let CONFIG = require('./config');

let app = express();
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

// setup mongodb
let mongoose = require('./daos/mongodb/mongoose');
mongoose.init(CONFIG);
require('./daos/mongodb/models').init();

// routing
require('./routes')(app);

var port = process.env.PORT || 8001;
var host = process.env.HOST || '0.0.0.0';

server.listen(port, host, function() {
    console.info("App started at: " + new Date() + " on port " + port);
});

module.exports = app;
