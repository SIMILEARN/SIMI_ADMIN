var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);


/* GET home page. */
const GetData= async (req, res, next) => {

  
  res.render('preguntaDI', { title: 'Express', layout: 'admin' });
};



/* agregar preguntas */
const PostData= async (req, res, next) => {
    let {texto, imagen} = req.body;
    try {
      const result = await query("INSERT INTO pregunta (fk_tema, texto, imagen) VALUES (?,?,?)", [03], [texto] , imagen);           
      res.json(result);
    } catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  };


  module.exports = {
    GetData,
    PostData
  }
  