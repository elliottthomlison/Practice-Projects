const express = require('express');
const app = express();

app.use(express.json());

//import all rotues
const products = require('./routes/product')

app.use('/api/v1', products)

//this will be used in the server.js file
module.exports = app