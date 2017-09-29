const express = require('express');
const controllerUsuario = require('../controllers/usuarios')
const controllerProduto = require('../controllers/produtos')
const controllerOperacao = require('../controllers/operacoes')
const controllerAnalise = require('../controllers/analiseNegocios')
const router = express.Router();


//controller de usuarios
router.get('/usuarios', controllerUsuario.listarTodos);
router.post('/usuarios', controllerUsuario.cadastrar);
router.get('/usuarios/:id', controllerUsuario.listarPorId);
router.delete('/usuarios/delete/:id', controllerUsuario.deletar);
router.put('/usuarios/update/:id', controllerUsuario.atualizar);

//controller de produtos
router.get('/produtos', controllerProduto.listarTodos);
router.post('/produtos', controllerProduto.cadastrar);
router.get('/produtos/produto/:id', controllerProduto.listarPorId);
router.get('/produtos/produto', controllerProduto.listarPorNome);
router.delete('/produtos/delete/:id', controllerProduto.deletar);
router.put('/produtos/update/:id', controllerProduto.atualizar);


//controller de operacoes
router.post('/operacoes/compra', controllerOperacao.comprarProdutos)
router.post('/operacoes/venda', controllerOperacao.venderProdutos)

router.get('/analise/maisVendido', controllerAnalise.consultarMaisVendido)
router.get('/analise/menosVendido', controllerAnalise.consultarMenosVendido)
// router.get('/analise/maisVendidos', controllerAnalise.consultarMaisVendidos)
router.get('/analise/consultarVendas', controllerAnalise.consultarVendas)


module.exports = router;
