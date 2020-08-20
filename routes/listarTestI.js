var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarTestI')
const { TraerData } = require('../services/listarTestI')

//localhost:3000/listarCurso?id:2

router.get('/listarTestI', GetData);
router.get('/listarTestI/:id/', TraerData);


module.exports = router;