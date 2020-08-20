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
    require('./profesores'),
    require('./respuestaDI'),
    require('./respuestaIN'),
    require('./respuestaDI'),
    require('./testDI'),
  
    require('./listarTe'),
    
  ]
);

module.exports = router;