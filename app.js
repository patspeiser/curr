const express = require('express');
const app = express();
const path = require('path');
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const PriceService = Services.PriceService;
const OrderService = Services.OrderService;
const Models = StorageService.models;
const socket = require('socket.io-client')(process.env.SOCKET_SERVER || 'http://localhost:3000');

module.exports = app;

socket.on('price', function(fn){
	switch(fn){
		case 'getAllPrices':
		console.log('getting all prices');
			PriceService.getAllPrices().then(function(prices){});
			break;
		default: 
			break; 
	}
	/*
	PriceService.getAllPrices().then(function(prices){
		res.send(prices);	
	});
	*/
});

socket.on('order', function(){
	OrderService.createOrder().then(function(order){
		res.send(order);
	});
});
