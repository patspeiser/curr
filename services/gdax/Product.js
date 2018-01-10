const path = require('path');
const config = require(path.join(__dirname,'../../config')).config.gdax;
const gdax = require('gdax');
const publicClient = new gdax.PublicClient();
const GdaxProduct = require(path.join(__dirname, '../db')).models.Gdax.GdaxProduct;

function getProducts(){
	return publicClient
	.getProducts()
	.then( products => {
		products.forEach(function(product){
			//change key name. sequelize doesnt like it
			product['gdax_product_id'] = product['id'];
			delete product['id'];
			GdaxProduct.create(product).then(function(product){
				return product; 
			});
		});
	});
}

getProducts();

module.exports = {
		getProducts: getProducts
}