var controllers = require('./controllers');

module.exports = function(app) {
	app
		.post('/login', controllers.login)
		.post('/singup', controllers.singup)
		.post('/userId', controllers.userId)
		.post('/morgan-test', controllers.morgaTest)

		.get('*', function(req, res) {

			res.sendfile('./public/index.html');
		});
};
