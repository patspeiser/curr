const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, 'config.js')).config;
const apiKey = config.apiKey;
const baseUrl = config.baseUrl;

var headers = {
	'User-Agent': 'anokuseragent',
	'Content-Type': 'application/json',
	'EVERCOIN-API-KEY': apiKey,
}

var options = {
	url: baseUrl + '/coins',
	method: 'GET',
	headers: headers,
};

request(options, function(error, response, body){
	if (!error && response.statusCode == 200){
		console.log(body);
	} else {
		console.log(error);
	}
});