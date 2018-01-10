const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, '../config.js')).config;
const apiKey = config.apiKey;
const baseUrl = config.baseUrl;
const chalk = require('chalk');

//request constructor
var Request = function(method, endpoint, body){
	this.headers = {
		'User-Agent': 'anokuseragent',
		'Content-Type': 'application/json',
		
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
	this.req = new Request(this.method, this.endpoint, this.body);
	var that = this;
	return new Promise( function(resolve, reject) {
		request(that.req.options, function(error, response, body){
			if (!error && response.statusCode == 200){
				resolve(JSON.parse(body));
			} else {
				reject(JSON.parse(body)); 
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

