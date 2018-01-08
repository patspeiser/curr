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
		return result;
	}, function(error){
		return error;
	});
}

function getPriceList(){
	var method = 'POST';
	var symbols = [];
	Coin.findAll().then(function(coins){
		coins.forEach(function(coin){
			symbols.push(coin.symbol);
		});

		var pairs = [];
		for (let i = 0; i < symbols.length; i++){
			for(let j = 0; j < symbols.length; j++){
				if (i !== j){
					pairs.push([symbols[i],symbols[j]]);
				}
			}
		}

		var bodies = []; 
		for(let i = 0; i< pairs.length; i++){
			var body = RequestService.setRequestBody(pairs[i][0], 1, pairs[i][1])
			bodies.push(body);
		}

		RequestService.makeRequest(method, endpoint, bodies)
			.then(function(result){
				return result;
			}, function(error){
				console.log(error);
				return error;
			});
	});
}

module.exports = {
	getPrice: getPrice,
	getPriceList: getPriceList
}

