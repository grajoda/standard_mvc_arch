// rotas
//importe as funções que deseja utilizar 
const express = require('express');
const router = express.Router();

//importe as rotas
const route = require('./routeName');
//configure as rotas
router.use('/', route);

module.exports = router; 

