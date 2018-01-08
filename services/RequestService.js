const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, '../config.js')).config;
const apiKey = config.apiKey;
const baseUrl = config.baseUrl;

//request constructor
var Request = function(method, endpoint, body){
	this.headers = {
		'User-Agent': 'anokuseragent',
		'Content-Type': 'application/json',
		'EVERCOIN-API-KEY': apiKey
	};
	this.options = {
		uri: baseUrl + endpoint,
		method: method,
		headers: this.headers,
		body: JSON.stringify(body)
	};
}

function setRequestBody(coin, amount, otherCoin){
	this.body = {
		"depositCoin": coin,
		"depositAmount": amount,
		"destinationCoin": otherCoin
	};
	return this.body;
}

//calls constructor and makes request
function makeRequest(method, endpoint, body){
	this.method = method;
	this.endpoint = endpoint;
	this.body = body;
	var req = new Request(this.method, this.endpoint, this.body);
	return new Promise( function(resolve, reject) {
		request(req.options, function(error, response, body){
			if (!error && response.statusCode == 200){
				resolve(JSON.parse(body));
			} else {
				reject(JSON.parse(error)); 
			}
		});
	})
}

module.exports = {
	methods: {
		makeRequest: makeRequest,
		setRequestBody: setRequestBody
	}
}

