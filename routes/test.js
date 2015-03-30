module.exports = [
	{ method: 'GET', path: '/', handler: index } //Ping page
];
	
function index(request, reply) {
	reply('Test site is up and running!');
}