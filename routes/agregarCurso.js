var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarCurso')
const { PostData } = require('../services/agregarCurso')
const { TraerData } = require('../services/agregarCurso')

/* GET home page. */
router.get('/agregaCurso', GetData);
router.post('/agregaCurso', PostData);
router.get('/agregaCurso', TraerData);



module.exports = router;
