const path = require('path');
const port = process.env.PORT;
const app = require(path.join(__dirname, './app'));
const server = require('http').createServer(app);
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const Coin = StorageService.models.Coin;

var SYNC = process.env.SYNC; 

if(SYNC == true ){
	StorageService.db.sync({force:true})
		.then(function(){
			server.listen(port, function(){
				console.log('...server running on port', port);
			})
		})
} else {
	server.listen(port, function(){
		console.log('...server running on port', port);
		Services.CoinService.getCoins().then(function(coins){
			if(coins.error)
				console.log(coins.error);
			if(coins.result)
				console.log(coins.result);
			var coins = coins.result;
			coins.forEach(function(coin){
				Coin.findOrCreate({where: { symbol: coin.symbol}, defaults: coin }).then(function(){
					console.log('New coin saved to db', coin.name, coin.symbol);
				})
			})
		});
	})
}
