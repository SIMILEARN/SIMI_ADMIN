var express = require('express');
var router = express.Router();
const { GetData } = require('../services/respuestaDI')
const { PostData } = require('../services/respuestaDI')

/* GET home page. */
router.get('/respuestaDI', GetData);
router.get('/respuestaDI', PostData);

module.exports = router;