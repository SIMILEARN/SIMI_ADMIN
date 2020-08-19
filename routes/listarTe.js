var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarTe');
const { GetPregunta } = require('../services/listarTe');
const { eliminar } = require('../services/listarTe');


/* GET home page. */
router.get('/listarTe', GetData);
router.get('/listarTe', GetPregunta);
router.delete('/listarTe', eliminar);

module.exports = router;