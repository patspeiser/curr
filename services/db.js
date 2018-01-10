const Sequelize = require('sequelize');
const urlString = "postgres://postgres:postgres@localhost/curr";
const db = new Sequelize(process.env.DATABASE_URL || urlString, {logging: false} );

const GdaxProduct = db.define('gdax_product', {
	gdax_product_id:  {type: db.Sequelize.STRING},
    base_currency:    {type: db.Sequelize.STRING},
    quote_currency:   {type: db.Sequelize.STRING},
    base_min_size:    {type: db.Sequelize.FLOAT},
    base_max_size:    {type: db.Sequelize.FLOAT},
    quote_increment:  {type: db.Sequelize.FLOAT},
    display_name:     {type: db.Sequelize.STRING},
    status:           {type: db.Sequelize.STRING},
    margin_enabled:   {type: db.Sequelize.BOOLEAN},
    status_message:   {type: db.Sequelize.STRING},
    min_market_funds: {type: db.Sequelize.FLOAT},
    max_market_funds: {type: db.Sequelize.FLOAT},
    post_only: 	 	  {type: db.Sequelize.STRING},
    limit_only: 	  {type: db.Sequelize.STRING}
});

const GdaxType = db.define('gdax_type', {
	name: {type: db.Sequelize.STRING}
})

const GdaxMessage = db.define('gdax_message', {
	type: 		{type: db.Sequelize.STRING},
	order_id: 	{type: db.Sequelize.STRING},
	order_type: {type: db.Sequelize.STRING},
	size: 		{type: db.Sequelize.FLOAT},
	price: 		{type: db.Sequelize.FLOAT},
	side: 		{type: db.Sequelize.STRING},
	product_id: {type: db.Sequelize.STRING},
	sequence: 	{type: db.Sequelize.FLOAT},
	time: 		{type: db.Sequelize.STRING}
});

module.exports = {
	db: db,
	models: {
		Gdax: {
			GdaxProduct: GdaxProduct,
			GdaxMessage: GdaxMessage,
			GdaxType:   GdaxType
		}	
	}
}
	/* GET gdax /products 
	   { id: 'BTC-USD',
	    base_currency: 'BTC',
	    quote_currency: 'USD',
	    base_min_size: '0.0001',
	    base_max_size: '250',
	    quote_increment: '0.01',
	    display_name: 'BTC/USD',
	    status: 'online',
	    margin_enabled: false,
	    status_message: null,
	    min_market_funds: '1',
	    max_market_funds: '1000000',
	    post_only: false,
	    limit_only: false } 
	*/
	/* get gdax wss message
		{ type: 'received',
  		order_id: 'dd34187b-d2ab-414d-82af-0099ee82010f',
  		order_type: 'limit',
  		size: '0.00011951',
  		price: '14433.42000000',
  		side: 'buy',
  		product_id: 'BTC-USD',
  		sequence: 4830794167,
  		time: '2018-01-10T20:56:53.615000Z' }
  */


		//Evercoin: {
		//		EvercoinCoin: EvercoinCoin,
		//		EvercoinPrice: EvercoinPrice,
		//		EvercoinOrder: EvercoinOrder
		//},

/*
const EvercoinCoin = db.define('evercoinCoin', {
	name: 				{type: db.Sequelize.STRING, unique: true},
	symbol: 			{type: db.Sequelize.STRING, unique:true},
	value: 				{type: db.Sequelize.FLOAT},
	tagName: 			{type: db.Sequelize.STRING},
	fromAvailable: 		{type: db.Sequelize.BOOLEAN},
	toAvailable: 		{type: db.Sequelize.BOOLEAN}
});

const EvercoinPrice = db.define('evercoinPrice', {
	depositCoin: 	 	{type: db.Sequelize.STRING},
	destinationCoin: 	{type: db.Sequelize.STRING},
	depositAmount: 		{type: db.Sequelize.STRING},
	destinationAmount: 	{type: db.Sequelize.STRING},
	signature: 			{type: db.Sequelize.STRING}
});

const EvercoinOrder = db.define('evercoinOrder', {
	depositCoin: 	 	{type: db.Sequelize.STRING},
	destinationCoin: 	{type: db.Sequelize.STRING},
	depositAmount: 		{type: db.Sequelize.STRING},
	destinationAmount: 	{type: db.Sequelize.STRING},
	signature: 			{type: db.Sequelize.STRING},
	destinationAddress: {type: db.Sequelize.STRING},
	refundAddress: 		{type: db.Sequelize.STRING}
});
*/
