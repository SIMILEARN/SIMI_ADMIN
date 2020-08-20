var express = require('express');
var router = express.Router();
const { GetData } = require('../services/preguntaIM')
const { PostData } = require('../services/preguntaIM')
const { TraerData } = require('../services/preguntaIM')

/* GET home page. */
router.get('/preguntaIM', GetData);
router.get('/preguntaIM', TraerData);
router.get('/preguntaIM', PostData);

module.exports = router;