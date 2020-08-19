var express = require('express');
var router = express.Router();
const { GetData } = require('../services/indexP')

/* GET home page. */
router.get('/indexP', GetData);

module.exports = router;