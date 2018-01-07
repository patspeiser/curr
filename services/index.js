const path = require('path');

module.exports = {
	CoinService: 	require(path.join(__dirname, 'CoinService')),
	OrderService: 	require(path.join(__dirname, 'OrderService')),
	PriceService: 	require(path.join(__dirname, 'PriceService')),
	RequestService: require(path.join(__dirname, 'RequestService')),
	StorageService: require(path.join(__dirname, 'StorageService')),
};