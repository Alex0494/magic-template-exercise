var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:49155/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:49155/test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:49155/test'
  }
};

module.exports = config[env];
