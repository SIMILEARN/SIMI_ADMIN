const router = require('express').Router();
//empiece a importar asi
router.use(
  [
    require('./agregarE'),
    require('./agregarT'),
    require('./estudiantes'),
    require('./indexP'),
    require('./listarE'),
    require('./listarT'),
    require('./preguntaDI'),
    require('./preguntaIM'),
    require('./preguntaIN'),
    require('./profesores'),
    require('./respuestaIN'),
    require('./respuestaDI'),
    require('./testDI'),
    require('./testIM'),
    require('./testIN'),
    require('./listarTe'),
   
  ]
);

module.exports = router;