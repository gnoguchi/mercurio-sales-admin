// incluindo schemas e os middleware de token do passwordHash
const UserSchema = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
//realiza o login verificando senha em hash e setando um token.
module.exports.login = (req, res) => {
  let query = { email: req.body.email };
  if(req.body.email == '' || req.body.senha == '') {
    res.status(400).send('Preencha todos os campos.');
  }else{
    UserSchema.findOne(query, (error, usuario) => {
      if (usuario && passwordHash.verify(req.body.senha, usuario.senha)) {
        const token = jwt.sign({ _id: usuario._id }, 'mercurio');
        res.set('Authorization', token);
        res.send(usuario, 200);
        return;
      };
      res.status(400).send('Email ou senha invalidos.');
    });
  };
};
