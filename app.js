const express = require('express');
const app = express();
const path = require('path');
const Services = require(path.join(__dirname, 'services'));
const Gdax = Services.Gdax;
const socket = require('socket.io-client')(process.env.SOCKET_SERVER || 'http://localhost:3000');

module.exports = app;

socket.on('price', function(fn){
	switch(fn){
		case 'getGdaxPrices':
			console.log('getGdaxProducts'); 
			Gdax.Product.getProducts();
			break;
		default: 
			break; 
	}
});

socket.on('order', function(){
});
socket.on('eval', function(){
})