var express = require('express');
var router = express.Router();
const { TraerPreguntas } = require('../services/listarPreguntasIngles')
const { TraerRespuestas} = require('../services/listarPreguntasIngles')

//localhost:3000/listarCurso?id:2


router.get('/listarPreguntasIngles/:id/', TraerPreguntas);
router.get('/listarPreguntasIngles/respuestas/:id/', TraerRespuestas);

module.exports = router;