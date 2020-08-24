var express = require('express');
var router = express.Router();
const { GetData } = require('../services/actividad')
const { postData } = require('../services/actividad')

/* GET home page. */
router.get('/actividad', GetData);
router.post('/actividad', postData);


module.exports = router;