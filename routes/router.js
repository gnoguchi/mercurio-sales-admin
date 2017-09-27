const express = require('express');
const controllerUsuario = require('../controllers/usuarios')
<<<<<<< HEAD
const controllerProduto = require('../controllers/produtos')
const router = express.Router();


=======
let router = express.Router();
>>>>>>> 4b70255... CRUD usuario
//controllers de usuarios
router.get('/usuarios', controllerUsuario.listarTodos);
router.post('/usuarios', controllerUsuario.cadastrar);
router.get('/usuarios/:id', controllerUsuario.listarPorId);
router.delete('/usuarios/delete/:id', controllerUsuario.deletar);
router.put('/usuarios/update/:id', controllerUsuario.atualizar);
<<<<<<< HEAD


//controllers de produtos
router.get('/produtos', controllerProduto.listarTodos);
router.post('/produtos', controllerProduto.cadastrar);
router.get('/produtos/:id', controllerProduto.listarPorId);
router.get('/produtos', controllerProduto.listarPorNome);
router.delete('/produtos/delete/:id', controllerProduto.deletar);
router.put('/produtos/update/:id', controllerProduto.atualizar);


=======
//exportando router
>>>>>>> 4b70255... CRUD usuario
module.exports = router;
