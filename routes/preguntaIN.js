var express = require('express');
var router = express.Router();
const { GetData } = require('../services/preguntaIN')
const { PostData } = require('../services/preguntaIN')


/* GET home page. */
router.get('/preguntaIN', GetData);

router.get('/preguntaIN', PostData);

module.exports = router;