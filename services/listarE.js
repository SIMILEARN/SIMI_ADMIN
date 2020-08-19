var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

/* listar estrategias */
const GetData = async (req, res, next) => {
  const result = await query('SELECT * from estrategia');
 console.log(result)
  res.render('listarE', { estrategias: result, layout: 'admin', title: 'Estudiantes' })


};

module.exports = {
  GetData
}
