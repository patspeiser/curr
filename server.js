const path = require('path');
const port = process.env.PORT;
const app = require(path.join(__dirname, './app'));
const server = require('http').createServer(app);
const Services = require(path.join(__dirname, 'services'));
const SYNC = process.env.SYNC; 
const io = require('socket.io')(server);

Services.db.sync({force: process.env.SYNC}).then(function(){
	server.listen(port, function(){ console.log('server on port: ', port)});

	io.on('connection', function(socket){
		
		setInterval(function(){
			socket.emit('price', 'getGdaxPrices');
		}, 1000);

		setInterval(function(){
			socket.emit('eval');
		}, 10000)
	});
});

