var express = require('express');
var router = express.Router();
const { PostData } = require('../services/agregarCurso')


/* GET home page. */

router.post('/agregaCurso', PostData);




module.exports = router;
