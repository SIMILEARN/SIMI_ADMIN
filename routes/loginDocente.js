var express = require('express');
var router = express.Router();
const {getData } = require('../services/loginDocente')


/* GET home page. */
router.get('/loginDocente/:id/',getData);



module.exports = router;