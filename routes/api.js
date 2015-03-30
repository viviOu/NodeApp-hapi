module.exports = [
	{ method: 'GET', path: '/', handler: index },
	{ method: 'GET', path: '/{name}', handler: hello }
];
	
function index(request, reply) {
	reply('API is up and running!');
}

function hello(request, reply) {
	reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
}
