'use strict';

var config = require('../../config/config.js'),
mongo = require('then-mongo'),
db = mongo(config.db, ['templates']),
model = {};

function Template(name, img, html, less, js) {
	this.name = name;
	this.img = img;
	this.html = html;
	this.less = less;
	this.js = js;
};

model.getTemplates = function(callback) {
	db.templates.find()
	.then(function(result) {
		callback(null, result)
	}, function(err) {
		callback(err, null);
	})
};

model.postTemplate = function(name, img, html, less, js, callback) {
	var template = new Template(name, img, html, less, js)
	console.log(template);
};

module.exports = model;
