

var express = require('express');
var router = express.Router();
const { GetData } = require('../services/testIN')
const { PostData } = require('../services/testIN')

/* GET home page. */
router.get('/testIN', GetData);
router.post('/testIN', PostData);

module.exports = router;