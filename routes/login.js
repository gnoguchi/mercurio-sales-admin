const express = require('express');
const controllerLogin = require('../controllers/login')

let router = express.Router();
//controllers de login
router.post('/', controllerLogin.login);
//exportando router
module.exports = router;
