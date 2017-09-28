const express = require('express');
const controllerUsuario = require('../controllers/usuarios');
const controllerProduto = require('../controllers/produtos');
const router = express.Router();


//controllers de usuarios
router.get('/usuarios', controllerUsuario.listarTodos);
router.post('/usuarios', controllerUsuario.cadastrar);
router.get('/usuarios/:id', controllerUsuario.listarPorId);
router.delete('/usuarios/delete/:id', controllerUsuario.deletar);
router.put('/usuarios/update/:id', controllerUsuario.atualizar);


//controllers de produtos
router.get('/produtos', controllerProduto.listarTodos);
router.post('/produtos', controllerProduto.cadastrar);
router.get('/produtos/produto/:id', controllerProduto.listarPorId);
router.get('/produtos/produto', controllerProduto.listarPorNome);
router.delete('/produtos/delete/:id', controllerProduto.deletar);
router.put('/produtos/update/:id', controllerProduto.atualizar);


module.exports = router;
