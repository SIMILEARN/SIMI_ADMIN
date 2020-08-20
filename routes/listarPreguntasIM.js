var express = require('express');
var router = express.Router();
const { TraerPreguntas } = require('../services/listarPreguntasIM')


//localhost:3000/listarCurso?id:2


router.get('/listarPreguntasIM/:id/', TraerPreguntas);

module.exports = router;