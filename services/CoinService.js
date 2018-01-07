const path = require('path');
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const Coin = require(path.join(__dirname, 'StorageService')).models.Coin;
const endpoint = 'coins';

function getCoins(){
	return new Promise(function(resolve, reject) {
		RequestService.makeRequest('GET', endpoint)
		.then(function(result){
			resolve(result);
		}, function(error){
			reject(error);
		});
	});
}

getCoins().then(function(result){
	var coinList = result.result;
	coinList.forEach(function(coin){
		//make-a-da coins mario
		Coin.create(coin);
	})
});

module.exports = {
	getCoins: getCoins
}
