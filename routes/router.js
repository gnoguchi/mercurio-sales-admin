const express = require('express');
const controllerUsuario = require('../controllers/usuarios')
let router = express.Router();
//controllers de usuarios
router.get('/usuarios', controllerUsuario.listarTodos);
router.post('/usuarios', controllerUsuario.cadastrar);
router.get('/usuarios/:id', controllerUsuario.listarPorId);
router.delete('/usuarios/delete/:id', controllerUsuario.deletar);
router.put('/usuarios/update/:id', controllerUsuario.atualizar);
//exportando router
module.exports = router;
