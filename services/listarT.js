var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../connection').Pool;
const modelo = {};
// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

/* listar tematicas */
modelo.GetData = async (req, res, next) => {

  const result = await query('SELECT  tema.nombre AS nombre, tipo_tema.tipo_tema AS tipo FROM tema INNER JOIN tipo_tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema');


  res.render('listarT', { tematicas: result, layout: 'admin', title: 'Estudiantes' })


}



modelo.DELETE = async (req, res, next) => {

  console.log("entro");
  let { id } = req.body;
  console.log(req.body.id);

  let datos = {
    id: req.body.id,

  }

  await db.query("DELETE FROM tema WHERE id = ?", [datos], (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect('/listarT');
    }
  });


}
    

module.exports = modelo
