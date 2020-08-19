var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

/* listar tematicas */
const GetData = async  (req, res, next) => {
  
  const result = await query('SELECT * from test');
  res.render('listarTe', { test: result, layout: 'admin', title: 'Test' })
}


const GetPregunta = async  (req, res, next) => {
  console.log(req.body.id);
  console.log("entro a pregunta")
  
  const result = await query(`SELECT pregunta.texto, pregunta.imagen_pregunta, respuesta.validacion, 
  respuesta.texto, respuesta.imagen_respuesta FROM pregunta
    INNER JOIN tema ON pregunta.fk_tema = tema.id
    INNER JOIN respuesta ON respuesta.fk_pregunta = pregunta.id 
  INNER JOIN test_preguntas ON test_preguntas.fk_pregunta = pregunta.id 
  INNER JOIN test ON test_preguntas.fk_test = test.id WHERE test.id = ${req.params.id}`);

  res.render('listarTe', { pregunta: result, layout: 'admin', title: 'Test' })
}


const eliminar = async (req, res, next) => {
  try {
    const result = await query(`DELETE FROM test WHERE id = ${req.params.id}`);      
    res.json(result);     
  } catch (error) {
 
    res.send(error.sqlMessage);
  }
};

module.exports = {
    GetData, 
    eliminar,
    GetPregunta,
  }