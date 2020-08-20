var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarTestIM')
const { TraerData } = require('../services/listarTestIM')

//localhost:3000/listarCurso?id:2

router.get('/listarTestIM', GetData);
router.get('/listarTestIM/:id/', TraerData);


module.exports = router;