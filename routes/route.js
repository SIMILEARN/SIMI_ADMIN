const router = require('express').Router();
//empiece a importar asi
router.use(
  [
    require('./agregarCurso'),
    require('./agregarE'),
    require('./agregarT'),
    require('./estudiantes'),
    require('./index'),
    require('./listarE'),
    // require('./listarT'),
    require('./preguntaDI'),
    require('./preguntaIM'),
    require('./preguntaIN'),
    require('./profesores'),
    require('./respuestaIN'),
    require('./respuestaDI'),
    require('./testDI'),
    require('./testIM'),
    require('./testIN'),
    require('./listarCurso'),
    require('./listarTestIM'),
    require('./listarTestI'),
    require('./listarTestIngles'),
    require('./listarPreguntasIM'),
    require('./listarResultadoIM'),
    require('./listarPreguntasI'),
    //require('./listarECurso'),
    require('./perfilDocente'),
    require('./agregarDocente'),
    require('./loginDocente'),
    
  ]
);

module.exports = router;