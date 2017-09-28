const express = require('express');
const UserSchema = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');

let router = express.Router();
//realiza o login verificando senha em hash e setando um token.
module.exports.login = (req, res) => {
  let query = { email: req.body.email };

  UserSchema.findOne(query, (error, usuario) => {
    if (usuario && passwordHash.verify(req.body.senha, usuario.senha)) {
      const token = jwt.sign({ _id: usuario._id }, 'mercurio');
      res.set('Authorization', token);
      res.send(usuario, 200);
      return;
    };
    res.sendStatus(400);
  });
};
