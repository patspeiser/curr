const request = require('request');
const path = require('path');
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const Coin = require(path.join(__dirname, 'StorageService')).models.Coin;
const endpoint = 'price';

function getPrice(coin, amount, otherCoin){
	this.method = 'POST';
	this.body = RequestService.setRequestBody(coin, amount, otherCoin);
	
	return RequestService.makeRequest(this.method, endpoint, this.body)
	.then(function(result){
		console.log(' result');
		return result;
	}, function(error){
		return error;
	});
}

function getPriceList(coinList){
	console.log(coinList);
}

module.exports = {
	getPrice: getPrice,
	getPriceList: getPriceList
}

