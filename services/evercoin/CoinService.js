/*
const path = require('path');
const RequestService = require(path.join(__dirname, '../RequestService')).methods;
const Coin = require(path.join(__dirname, '../StorageService')).models.Coin;
const endpoint = 'coins';

function getCoins(){
	this.method = 'GET';
	return new Promise(function(resolve, reject) {
		RequestService.makeRequest(this.method, endpoint)
		.then(function(result){
			resolve(result);
		}, function(error){
			reject(error);
		});
	});
}

function createCoinPairList(){
	var pairList = [];
}

module.exports = {
	getCoins: getCoins,
	createCoinPairList: createCoinPairList
}
*/