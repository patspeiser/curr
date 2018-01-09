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
const io = require('socket.io')(server);

StorageService.db.sync({force: process.env.SYNC}).then(function(){
	server.listen(port, function(){ console.log('server on port: ', port)});

	io.on('connection', function(socket){
		Services.CoinService.getCoins().then(function(coins){
			if(coins.result) {
				var coins = coins.result;

				for (let i = 0; i < coins.length; i++){
					Coin.findOrCreate({where: { symbol: coins[i].symbol}, defaults: coins[i] });
				}
			}
		});

		setInterval(function(){
			socket.emit('price', 'getAllPrices');
			//socket.emit('price', 'getPrice');
		}, 5000);
	});
});
