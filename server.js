#!/usr/bin/env /usr/bin/node
// czfpr - Nordit Business Intelligence Demo Server - Kompas

/**
 * Module Dependencies - nbims
 */
var express = require('express')
  , resource = require('express-resource')
  , fs = require('fs')
  , passport = require('passport')

// Load configurations
// if test env, load example file
var config = require("nconfig")({file: process.cwd() + '/server/config/config'})
  , mongoose = require('mongoose')

// Bootstrap db connection
mongoose.createConnection(config.db.mongo)
//mongoose.createConnection(config.db.mongoMaster)
mongoose.connect(config.db.mongoMaster)

// Bootstrap models
var models_path = config.path.server + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  console.log(models_path + '/' + file)
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})
// Contract model
var ncontract = require('ncontract')

// Setup contract
var setup = ncontract.Setup(config, function() {});

// bootstrap passport config
require(config.path.server + '/config/passport')(passport, config)

var app = express()

//require('./config/api')(app)

// Bootstrap i18n
require(config.path.server + '/config/i18n')(app, config)

require(config.path.server + '/config/express')(app, config, passport)
require(config.path.server + '/config/api')(app, config)

// Bootstrap routes
require(config.path.server + '/config/routes')(app, config, passport)

console.log('Start Application');

process.on('SIGINT', function() {
  console.log("\n"+'Suspend Application');
  // Shutdown script
  var shutdown = ncontract.Shutdown(config, function() {
    process.kill(process.pid);
  });
});

// Start the app by listening on <port>
var port = process.env.PORT || config.port || 3000
app.listen(port);
console.log('Express app started on port ' + port)

module.exports = app
