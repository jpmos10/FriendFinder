
// DEPENDENCIES

var path = require('path');





//routes

module.exports = function(app){

	
	app.get('/', function(request, result){
		result.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(request, result){
		result.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	

};