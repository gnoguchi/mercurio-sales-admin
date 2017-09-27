const express = require('express');
const UserSchema = require('../model/userSchema');
<<<<<<< dd23f79aeab44cc5846926755089fa3ed38d2558
const jwt = require('jsonwebtoken');

let router = express.Router();

=======
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

//realiza o login verificando senha em hash e setando um token.
>>>>>>> CRUD usuario
module.exports.login = (req, res) => {
  let query = {email : req.body.email};

  UserSchema.findOne(query, (error, usuario) => {
    if(usuario && passwordHash.verify(req.body.senha, usuario.senha)){
      const token = jwt.sign({_id: usuario._id}, 'mercurio');
      res.set('Authorization', token);
      res.send(usuario, 200);
      return;
    };
    res.sendStatus(400);
  });
<<<<<<< dd23f79aeab44cc5846926755089fa3ed38d2558

});

// module.exports = router;
=======
};
>>>>>>> CRUD usuario
