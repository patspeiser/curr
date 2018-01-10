const SYNC =		process.env.SYNC; 
const PORT = 		process.env.PORT;
const path = 		require('path');
const config = 		require(path.join(__dirname, './config')).config.gdax;
const express = 	require('express');
const app = 		express();
const server = 		require('http').createServer(app);
const Services = require(path.join(__dirname, 'services'));
const db = 	Services.db.db;
const GdaxProduct  =    Services.db.models.Gdax.GdaxProduct;
const GdaxMessage  =    Services.db.models.Gdax.GdaxMessage;
const gdax = 		require('gdax');
const publicClient = new gdax.PublicClient();
const chalk = require('chalk');
const socket = new gdax.WebsocketClient(
	['ETH-USD'],
	config.websocketUrl,
	null,
	{heartbeat: true}
);

db.sync({force: true}).then(function(){
	server.listen(PORT, function(){ 
		publicClient.getProducts().then(function(products){
			this.prods = [];
			products.forEach(function(product){
				this.prods.push(product.id);
				product['gdax_product_id'] = product['id'];
				delete product['id'];
				GdaxProduct.findOrCreate({where: {gdax_product_id: product['gdax_product_id']}, defaults: product }).then(function(product){});
			});
			socket.on('message', data => {
				console.log(data);
				//console.log(chalk.green(JSON.stringify(data)));
				//GdaxMessage.create(data);	
			});
			socket.on('error', data => {
				console.log(chalk.magenta(JSON.stringify(data)));
			});
		});
	});
});

