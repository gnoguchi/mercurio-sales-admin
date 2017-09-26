const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
require('./model/db');

const app = express();

app.use(bodyParser.json());
app.use('/', index);


module.exports = app;
