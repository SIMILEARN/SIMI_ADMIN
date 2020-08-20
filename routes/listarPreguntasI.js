var express = require('express');
var router = express.Router();
const { TraerPreguntas } = require('../services/listarPreguntasI')
const { TraerRespuestas } = require('../services/listarPreguntasI')


//localhost:3000/listarCurso?id:2


router.get('/listarPreguntasI/:id/', TraerPreguntas);
router.get('/listarPreguntasI/respuestas/:id', TraerRespuestas);

module.exports = router;
