const express = require('express');
const UserSchema = require('../model/userSchema');
const expressJwt = require('express-jwt');
const passwordHash = require('password-hash');
let router = express.Router();

// router.use(expressJwt({sercret: 'mercurio'}));
//listar todos os usuarios
module.exports.listarTodos = (req, res) => {
  UserSchema.find((error, response) => {
    console.log('foi!');
    res.send('Helloooooo!', 201);
  });
};
//cadastrar usuarios
module.exports.cadastrar = (req, res) => {
  UserSchema.findById(req.user._id, (error, usuario) =>{
    if (true){ //if (usuario.adm)
      let user = new UserSchema(req.body);
      user.senha = passwordHash.generate(req.body.senha);
      user.save((error, response) => {
        if(error){
          res.send(error, 404);
        };
        res.send(response, 201);
      });
    }else{
      res.send('Apenas o Admin pode salvar novos usuarios', 400);
    };
  });
};
// //lista o usuario cadastrado buscando pelo id passado como parametro.
module.exports.listarPorId = (req, res) => {
    UserSchema.findById(req.params.id, (error, response) => {
      res.send(response, 200);
    });
};
// // remove um usuario cadastrado atravez do parametro id /cadastro/id
module.exports.delete = (req, res) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, usuario) => {
      console.log(error);
    });
    res.redirect('/usuarios', 200);
};
// //exporta como um modulo o router.
// // module.exports = router;
