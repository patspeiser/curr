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

var body = { 
	"depositCoin": "BTC",
	"refundAddress": '',
	"depositAmount": '1',
	"destinationCoin": "LTC",
	"destinationAddress": "",
	"destinationAmmount": "",
	"signature": ""
}

var options = {
	url: baseUrl + '/order',
	method: 'POST',
	headers: headers,
	body: JSON.stringify(body)
};

request(options, function(error, response, body){
	if (!error && response.statusCode == 200){
		console.log(body);
	} else {
		console.log(error);
	}
});