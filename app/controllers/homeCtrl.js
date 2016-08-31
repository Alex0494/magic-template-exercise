var express = require('express'),
router = express.Router(),
mongoose = require('mongoose')

module.exports = function (app) {
  app.use('/', router);
};

var ciao = 'ciao'

router.get('/', function (req, res, next) {
  res.render('./website/index', {
    title: 'Templates Generator'
  });
});
