const path = require('path');

module.exports = {
	Evercoin: require(path.join(__dirname, 'evercoin')),
	RequestService: require(path.join(__dirname, 'RequestService')),
	StorageService: require(path.join(__dirname, 'StorageService')),
	EvaluateService: require(path.join(__dirname, 'EvaluateService')),
};