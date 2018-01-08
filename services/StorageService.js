const Sequelize = require('sequelize');
const urlString = "postgres://postgres:postgres@localhost/curr";
const db = new Sequelize(process.env.DATABASE_URL || urlString, {logging: false})
const Q = require('q');

const Coin = db.define('coin', {
	name: {type: db.Sequelize.STRING, unique: true},
	symbol: {type: db.Sequelize.STRING, unique:true},
	value: db.Sequelize.INTEGER,
	tagName: db.Sequelize.STRING,
	fromAvailable: db.Sequelize.BOOLEAN,
	toAvailable: db.Sequelize.BOOLEAN
});

module.exports = {
	db: db,
	models: {
		Coin: Coin
	}
}