const path = require('path');
const Services = require(path.join(__dirname, '../'));
const RequestService = Services.RequestService.methods;
const config = require(path.join(__dirname,'../../config')).config.gdax;
const gdax = require('gdax');
const publicClient = new gdax.PublicClient();

console.log(gdax);

function yo(){
		console.log(RequestService,config);
		return yo;
}
yo(); 

function getProducts(){
	return publicClient
	.getProducts()
	.then( data => {
		console.log(data);
		return data;
	});
}

getProducts();

module.exports = {
		yo: yo
}