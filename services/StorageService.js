const Sequelize = require('sequelize');
const urlString = "postgres://postgres:postgres@localhost/curr";
const db = new Sequelize(process.env.DATABASE_URL || urlString, {logging: false});

const Coin = db.define('coin', {
	name: db.Sequelize.STRING,
	symbol: db.Sequelize.STRING,
	value: db.Sequelize.INTEGER,
	tagName: db.Sequelize.STRING,
	fromAvailable: db.Sequelize.BOOLEAN,
	toAvailable: db.Sequelize.BOOLEAN
});

db.sync().then(function(){
	//
});

module.exports = {
	db: db,
	models: {
		Coin: Coin
	}
}