const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/router');
require('./model/db');

const app = express();

app.use(bodyParser.json());
app.use('/', index);

app.listen(3000, () => {
  console.log('Ouvindo na porta 3K!');
});

module.exports = app;
