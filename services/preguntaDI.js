var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);


/* GET home page. */
const GetData = async (req, res, next) => {

  const result = await query('SELECT * FROM test');

  const temas = await query('SELECT * FROM tema');
  
  res.render('preguntaDI', { test: result, tema:temas, title: 'Express', layout: 'admin' });
};



const PostData = async (req, res, next) => {



  let { texto, imagen_pregunta, fk_test } = req.body;

  console.log("entro al post");
  let datos = {
    texto: req.body.texto,
    imagen_pregunta: req.body.imagen_pregunta,
    fk_test: req.body.fk_test,
  }
  await db.query("INSERT INTO pregunta set ?", [datos], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/preguntaDI');
    }

  });


}
module.exports = {
  GetData,
  PostData
}
