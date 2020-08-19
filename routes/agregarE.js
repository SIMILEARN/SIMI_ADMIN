var express = require('express');
var router = express.Router();
const { GetData } = require('../services/agregarE')
const { postData } = require('../services/agregarE')

/* GET home page. */
router.get('/agregarE', GetData);
router.post('/agregarE', postData);


module.exports = router;