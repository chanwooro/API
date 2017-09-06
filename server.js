'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);

//Create database if not exists THEN open the connection
var fs = require('fs');

//API routing
require('./route/route')(app);

console.log('API Server is successfully booted on: ' + port);
