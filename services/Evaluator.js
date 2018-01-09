const request = require('request');
const path = require('path');
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const Coin = require(path.join(__dirname, 'StorageService')).models.Coin;
const Price = require(path.join(__dirname, 'StorageService')).models.Price;
const socket = require('socket.io-client')(process.env.SOCKET_SERVER || 'http://localhost:3000');

socket.on('eval', function(){
	Price.findAll({limit: 50})
		.then(function(results){
			console.log(results);
		});
})

module.exports = {};