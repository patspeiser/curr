const path = require('path');
const port = process.env.PORT;
const app = require(path.join(__dirname, './app'));
const server = require('http').createServer(app);
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const PriceService = Services.PriceService; 
const Coin = StorageService.models.Coin;
const SYNC = process.env.SYNC; 

StorageService.db.sync({force: process.env.SYNC}).then(function(){
	console.log('db synced');

	server.listen(port, function(){
		checkCoinSlot();
	})
})

//gets all coins from remote 
function checkCoinSlot(){
	return Services.CoinService.getCoins().then(function(coins){
		if(coins.error)
			console.log(coins.error);
		if(coins.result)
			console.log(coins.result);
		var coins = coins.result;
		for (let i = 0; i < coins.length; i++){
			Coin.findOrCreate({where: { symbol: coins[i].symbol}, defaults: coins[i] });
		}
	});	
}

function startUpMessage(){
	console.log('...server running on port', port);
	console.log('...getting coins');	
};
