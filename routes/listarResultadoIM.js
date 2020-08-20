var express = require('express');
var router = express.Router();
const {  TraerResultado } = require('../services/listarResultadoIM')


//localhost:3000/listarCurso?id:2


router.get('/listarResultadoIM/:id/',TraerResultado);

module.exports = router;