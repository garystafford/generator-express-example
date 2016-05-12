var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mean-message-example'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-message-example-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mean-message-example'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-message-example-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mean-message-example'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-message-example-production'
  }
};

module.exports = config[env];
