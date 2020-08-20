var express = require('express');
var router = express.Router();
const { GetData } = require('../services/index')

/* GET home page. */
router.get('/index', GetData);

module.exports = router;