var express = require('express');
var router = express.Router();
const { GetData } = require('../services/listarE')

/* GET home page. */
router.get('/listarE', GetData);

module.exports = router;
