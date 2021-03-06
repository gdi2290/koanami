#!/usr/bin/env node

var koa = require('koa');
module.exports = function(SERVER_ROOT) {
  var app = koa();
  app.name = 'KoaNami';
  app.rootPath = SERVER_ROOT;

  // logger
  require('./middleware/logger')(app);

  // routes
  require('./routes')(app);

  return app;
};
