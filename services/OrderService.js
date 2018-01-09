const request = require('request');
const path = require('path');
const endpoint = 'order';
const RequestService = require(path.join(__dirname, 'RequestService')).methods;
const StorageService = require(path.join(__dirname, 'StorageService'));
const config = require(path.join(__dirname, '../config.js')).config;

module.exports = {
	Order: Order,
	createOrder: createOrder
}

function Order(row){
	this.headers = {
		'User-Agent': 'anokuseragent',
		'Content-Type': 'application/json',
		'EVERCOIN-API-KEY': config.apiKey
	};

	this.body = {
		"depositCoin": row.depositCoin,
		"refundAddress": config.bitcoinWallet,	
		"depositAmount": row.depositAmount,
		"destinationCoin": row.destinationCoin,
		"destinationAddress": config.bitcoinWallet,
		"destinationAmount": row.destinationAmount,
		"signature": row.signature
	}

	this.options = {
		uri: config.baseUrl + endpoint,
		method: this.method,
		headers: this.headers,
		body: JSON.stringify(this.body)
	};
};

function createOrder(row){
		this.order = new Order(row);
		console.log(this.order);
		
		return RequestService.makeRequest('POST', endpoint, this.order).then(function(results){
			return results;
		});
}

