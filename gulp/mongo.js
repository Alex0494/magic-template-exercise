/**
 * THIS TASK CONNECTS TO THE DATABASE
 */
'use strict';

var mongo = require('then-mongo');

module.exports = function(config) {
	var db = mongo(config.cs, [config.collection])
	
}
