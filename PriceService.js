const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, 'config')).config;
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const Coin = require(path.join(__dirname, 'StorageService')).models.Coin;
const endpoint = 'order';

function _setRequestBody(coin, amount, otherCoin){
	this.body = {
		"depositCoin": coin,
		"depositAmount": amount,
		"destinationCoin": otherCoin
	};
	
	return this.body;
}

function getPrice(coin, amount, otherCoin){
	this.body = _setRequestBody(coin, amount, otherCoin);
	return RequestService.makeRequest('POST', endpoint, this.body)
	.then(function(result){
		console.log(result.id, result.name, result.symbol, result.value);
		return result;
	}, function(error){
		return error;
	});
}

//for testing
Coin.findAll().then(function(coins){
	return coins.forEach(function(coin){
			return getPrice(coin.symbol, 1, 'LTC').then(function(price){
		})
	})
});

module.exports = {
	getPrice: getPrice
}

