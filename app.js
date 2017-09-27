//incluindo o express e middlewares
const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
//incluindo as rotas
const routerLogin = require('./routes/login');
const routerIndex = require('./routes/router');
//chamando a conexao do DB em ./model
require('./model/db');
const app = express();
//chamando o bodyParser lendo json
app.use(bodyParser.json());

//chamando a rota de login
app.use('/login', routerLogin);
//chamando a verificacao do token nas rotas do router.
app.use(expressJwt({secret: 'mercurio'}));
app.use('/', routerIndex);
//ouvindo o servidor na porta 3K.
app.listen(3000, () => {
  console.log('Ouvindo na porta 3K!');
});
