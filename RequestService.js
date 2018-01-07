const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, 'config.js')).config;
const apiKey = config.apiKey;
const baseUrl = config.baseUrl;


//request constructor
var Request = function(method, endpoint, body){
	this.headers = {
		'User-Agent': 'anokuseragent',
		'Content-Type': 'application/json',
		'EVERCOIN-API-KEY': apiKey
	};
	this.body = body;
	this.options = {
		uri: baseUrl + endpoint,
		method: method,
		headers: this.headers,
	};

	if (this.body){
		this.options.body = JSON.stringify(this.body);
	}
}

//idk what this does. jk. creates a new request and returns what we get
function makeRequest(method, endpoint, body){
	this.method = method;
	this.endpoint = endpoint;
	this.body = body;

	var req = new Request(this.method, this.endpoint, this.body);
	
	return request(req.options, function(error, response, body){
		if (!error && response.statusCode == 200){
			return body;
		} else {
			return error; 
		}
	});
}

module.exports = {
	methods: {
		makeRequest: makeRequest
	}
}

var exampleBody = {
	'depositCoin': 'BTC',
	'destinationCoin': 'LTC',
	'depositAmount': '1'
}

if(process.env.EXAMPLE){
	makeRequest('POST', 'price', exampleBody);
}
