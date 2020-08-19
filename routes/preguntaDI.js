var express = require('express');
var router = express.Router();
const { GetData } = require('../services/preguntaDI')
const { PostData } = require('../services/preguntaDI')

/* GET home page. */
router.get('/preguntaDI', GetData);
router.post('/preguntaDI', PostData);

module.exports = router;