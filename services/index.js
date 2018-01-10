const path = require('path');

module.exports = {
	Evercoin: 			require(path.join(__dirname, 'evercoin')),
	Gdax: 				require(path.join(__dirname, 'gdax')),
	RequestService: 	require(path.join(__dirname, 'RequestService')),
	db: 				require(path.join(__dirname, 'db')),
	EvaluateService: 	require(path.join(__dirname, 'EvaluateService')),
};