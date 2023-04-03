/*
    template de rota usando express
*/

// rotas
//importe as funções que deseja utilizar 
const express = require('express');
const router = express.Router();
const functions = require('../controllers/function')

//templates de rota
router.get('/routename', (req, res) => {
    //code
    res.render('pages/page');
});

router.post('/routename', functions.functionality);

module.exports = router; 