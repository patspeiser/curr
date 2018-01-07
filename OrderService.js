const request = require('request');
const path = require('path');
const config = require(path.join(__dirname, 'config.js'))
const apiKey = config.dev.apiKey;
const baseUrl = config.dev.baseUrl;

