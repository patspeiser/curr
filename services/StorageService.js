const Sequelize = require('sequelize');
const urlString = "postgres://postgres:postgres@localhost/curr";
const db = new Sequelize(process.env.DATABASE_URL || urlString, {logging: false} );

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

const GdaxProduct = db.define('gdax_product', {
	id_string: 		  {type: db.Sequelize.STRING},
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
			
	/* GET /products 
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

module.exports = {
	db: db,
	models: {
		Evercoin: {
				EvercoinCoin: EvercoinCoin,
				EvercoinPrice: EvercoinPrice,
				EvercoinOrder: EvercoinOrder
		},
		Gdax: {
				GdaxProduct: GdaxProduct	
		}
	}
}