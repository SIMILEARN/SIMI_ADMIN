var express = require('express');
var router = express.Router();
const { GetData } = require('../services/testIM')
const { PostData } = require('../services/testIM')

/* GET home page. */
router.get('/testIM', GetData);
router.get('/testIM', PostData);

module.exports = router;