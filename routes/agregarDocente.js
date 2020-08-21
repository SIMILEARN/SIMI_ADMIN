var express = require('express');
var router = express.Router();
const { postData } = require('../services/agregarDocente')

/* GET home page. */
router.post('/agregarDocente', postData);

module.exports = router;