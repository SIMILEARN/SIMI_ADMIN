var express = require('express');
var router = express.Router();
const { PostData } = require('../services/perfilDocente')
const { TraerData } = require('../services/perfilDocente')


/* GET home page. */
router.post('/perfilDocente', PostData);
router.get('/perfilDocente/:id/', TraerData);


module.exports = router;