var express = require('express');
var router = express.Router();
const { GetData } = require('../services/testDI')
const { postData } = require('../services/testDI')

/* GET home page. */
router.get('/testDI', GetData);
router.post('/testDI', postData);

module.exports = router;