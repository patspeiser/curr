const request = require('request');
const path = require('path');
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const Coin = require(path.join(__dirname, 'StorageService')).models.Coin;
const Price = require(path.join(__dirname, 'StorageService')).models.Price;

Prince.findAll({limit: 50})
	.then(function(results){
		//console.log(results);
	});

module.exports = {};