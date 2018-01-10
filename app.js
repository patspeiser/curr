const express = require('express');
const app = express();
const path = require('path');
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const EvaluateService = Services.EvaluateService;
const socket = require('socket.io-client')(process.env.SOCKET_SERVER || 'http://localhost:3000');

module.exports = app;

socket.on('price', function(fn){
	switch(fn){
		case 'getAllPrices':
			console.log('getting all prices');
			break;
		default: 
			break; 
	}
});

socket.on('order', function(){
});

socket.on('eval', function(){
})