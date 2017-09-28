// incluindo schemas e os middleware de token do passwordHash
const UserSchema = require('../model/userSchema');
const expressJwt = require('express-jwt');
const passwordHash = require('password-hash');
//exportando modulo CRUD
module.exports = {
  //listar todos os usuarios cadastrados
  listarTodos: (req, res) => {
    UserSchema.find((error, response) => {
      console.log(response);
      res.send(response, 200);
    });
  },
  //cadastrar um novo usuario - apenas pelo adm
  cadastrar: (req, res) => {
    UserSchema.findById(req.user._id, (error, usuario) => {
      if (usuario.adm) {
        let user = new UserSchema(req.body);
        user.senha = passwordHash.generate(req.body.senha);
        user.save((error, response) => {
          if (error) {
            res.send(error, 404);
          };
          res.send(response, 201);
        });
      } else {
        res.send('Apenas o Admin pode salvar novos usuarios', 400);
      };
    });
  },
  //lista o usuario cadastrado buscando pelo id passado como parametro.
  listarPorId: (req, res) => {
    UserSchema.findById(req.params.id, (error, response) => {
      res.send(response, 200);
    });
  },
  // remove um usuario cadastrado atravez do parametro id /cadastro/id
  deletar: (req, res) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, usuario) => {
      console.log(error);
    });
    res.send('Cadastro Removido.', 200);
  },
  //atualiza um cadastro pelo id
  atualizar: (req, res) => {
    UserSchema.findByIdAndUpdate(req.params.id, req.body, (error, usuario) => {
      usuario.senha = passwordHash.generate(req.body.senha);
      usuario.save((error, response) => {
        if (error) {
          res.send(error, 404);
        };
        res.send(`Usuario ${usuario.nome}, atualizado com sucesso.`, 201);
      });
    });
  }

}
