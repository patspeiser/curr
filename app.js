const express = require('express');
const app = express();
const path = require('path');
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const PriceService = Services.PriceService;
const Models = StorageService.models;

module.exports = app;

app.get('/prices', function(req, res, next){
	PriceService.getAllPrices().then(function(prices){
		res.send(prices);	
	});
});

app.get('/order', function(req, res, next){
	
})