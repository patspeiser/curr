const express = require('express');
const app = express();
const path = require('path');
const Services = require(path.join(__dirname, 'services'));
const StorageService = Services.StorageService;
const Models = StorageService.models;

module.exports = app;

app.get('/prices', function(){
	res.send('ayo prices here');	
})