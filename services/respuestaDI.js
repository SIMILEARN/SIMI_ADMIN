var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async (req, res, next) => {

  const result = await query('SELECT * FROM pregunta');

  res.render('respuestaDI', { pregunta: result, title: 'Express', layout: 'admin' });
};


const PostData = async (req, res, next) => {
  console.log(req.body.texto)
  console.log("entro al post");
  await db.query(`CALL insertarRespuestas(${req.body.fk_pregunta},${req.body.texto},${req.body.texto2},${req.body.texto3},${req.body.validacion},${req.body.validacion2},${req.body.validacion3},${req.body.imagen_respuesta},${req.body.imagen_respuesta2},${req.body.imagen_respuesta3} )`, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/respuestaDI');
    }

  });


}

module.exports = {
  GetData,
  PostData

};