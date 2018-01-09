const path = require('path');
const port = process.env.PORT;
const app = require(path.join(__dirname, './app'));
const server = require('http').createServer(app);
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const PriceService = Services.PriceService; 
const OrderService = Services.OrderService; 
const Coin = StorageService.models.Coin;
const Price = StorageService.models.Price;
const SYNC = process.env.SYNC; 

StorageService.db.sync({force: process.env.SYNC}).then(function(){
	console.log('db synced');
	server.listen(port, function(){
		startUpMessage();
		
		Services.CoinService.getCoins().then(function(coins){
			if(coins.error)
				console.log(coins.error);
			if(coins.result) {
				var coins = coins.result;
				for (let i = 0; i < coins.length; i++){
					Coin.findOrCreate({where: { symbol: coins[i].symbol}, defaults: coins[i] });
				}
			}
		});

		setInterval(function(){
			return PriceService.getAllPrices().then(function(prices){
				return prices;
			})}, 36000);

/* 
		setInterval(function(){
			Price.findOne().then(function(price){
				OrderService.createOrder(price).then(function(order){
					console.log('herp')
				})
			})
		
		}, 3000);
*/
	});
});

function startUpMessage(){
	console.log('...server running on port', port);
	console.log('...getting coins');	
};
