(function() {
	var mongoose = require('mongoose')
	//var cs = 'mongodb://127.0.0.1:27017/test'
	var cs = 'mongodb://localhost:49155/test'

	console.log('PROGRAM IS STARTING...')
	console.log('TRYING TO CONNECT TO ' + cs)

	mongoose.connect(cs, function(err, resp) {
		if (err) {
			throw new Error('unable to connect to database at ' + cs + err);
		} else {
			console.log('connected ' + mongoose.connection);
		};
	});
	var db = mongoose.connection;

})();