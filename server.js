var Hapi = require('hapi');
var api_routes = require('./routes/api');
var test_routes = require('./routes/test');

var server = new Hapi.Server();

var api = server.connection({ port: 3001, labels: ['api'] });
var test = server.connection({ port: 3003, labels: ['test'] });

api.route(api_routes);

test.route(test_routes);

server.start(function () {
    console.log('API service is running at:', api.info.uri);
	console.log('Test site is running at:', test.info.uri);
});