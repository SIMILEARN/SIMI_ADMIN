var express = require('express');
var router = express.Router();
const ModeloTemas= require('../services/agregarT')


/* GET home page. */
router.get('/agregarT', ModeloTemas.GetData);
router.post('/agregarT',ModeloTemas.postData);

module.exports = router;