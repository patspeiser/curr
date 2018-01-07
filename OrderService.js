const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, 'config.js'))
const apiKey = config.dev.apiKey;
const baseUrl = config.dev.baseUrl;

var headers = {
	'User-Agent': 'anokuseragent',
	'Content-Type': 'application/json',
	'EVERCOIN-API-KEY': apiKey,
}

var body = { 
	"depositCoin": "BTC",
	"destinationCoin": "LTC",
	"depositAmount": '1'
}

var options = {
	url: baseUrl + '/price',
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