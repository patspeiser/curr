const Sequelize = require('sequelize');
const urlString = "postgres://postgres:postgres@localhost/curr";
const db = new Sequelize(process.env.DATABASE_URL || urlString, {logging: false} );
const Q = require('q');

const Coin = db.define('coin', {
	name: {type: db.Sequelize.STRING, unique: true},
	symbol: {type: db.Sequelize.STRING, unique:true},
	value: db.Sequelize.INTEGER,
	tagName: db.Sequelize.STRING,
	fromAvailable: db.Sequelize.BOOLEAN,
	toAvailable: db.Sequelize.BOOLEAN
});

const Price = db.define('price', {
	depositCoin: 	 	{type: db.Sequelize.STRING},
	destinationCoin: 	{type: db.Sequelize.STRING},
	depositAmount: 		{type: db.Sequelize.STRING},
	destinationAmount: 	{type: db.Sequelize.STRING},
	signature: 			{type: db.Sequelize.STRING}
});

const Order = db.define('order', {
	depositCoin: 	 	{type: db.Sequelize.STRING},
	destinationCoin: 	{type: db.Sequelize.STRING},
	depositAmount: 		{type: db.Sequelize.STRING},
	destinationAmount: 	{type: db.Sequelize.STRING},
	signature: 			{type: db.Sequelize.STRING},
	destinationAddress: {type: db.Sequelize.STRING},
	refundAddress: 		{type: db.Sequelize.STRING}
});

module.exports = {
	db: db,
	models: {
		Coin: Coin,
		Price: Price,
		Order: Order
	}
}