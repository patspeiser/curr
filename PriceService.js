var request = require('request');
var config = require('config')
var apiKey = config.dev.apiKey; 

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
	url: 'https://test.evercoin.com/v1/price',
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