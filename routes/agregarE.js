var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarE')

/* GET home page. */
router.get('/agregarE', GetData);


module.exports = router;