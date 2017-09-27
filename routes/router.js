const express = require('express');
const controllerUsuario = require('../controllers/usuarios')
let router = express.Router();

router.get('/usuarios', controllerUsuario.listarTodos);
router.post('/usuarios', controllerUsuario.cadastrar);
router.get('/:id', controllerUsuario.listarPorId);
router.get('/delete/:id', controllerUsuario.delete);

module.exports = router;
