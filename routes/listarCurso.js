var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarCurso')
const { TraerData } = require('../services/listarCurso')
//localhost:3000/listarCurso?id:2

router.get('/listarCurso', GetData);
router.get('/listarCurso', TraerData);

module.exports = router;