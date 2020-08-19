var express = require('express');
var router = express.Router();
const modeloTematicas = require('../services/listarT')


/* GET home page. */
router.get('/listarT', modeloTematicas.GetData);
router.delete('/listarT', modeloTematicas.DELETE);

module.exports = router;