var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async (req, res, next) => {


  res.render('respuestaDI', { pregunta: result,title: 'Express', layout: 'admin' });
};

  


const PostData = async (req, res, next) => {
  let { validacion, imagen_respuesta, fk_pregunta } = req.body;
 
  console.log("entro al post");
   let datos ={
    imagen_respuesta:req.body.imagen_respuesta,
    validacion:req.body.validacion,
    fk_pregunta:req.body.fk_pregunta,
   }
     await db.query("INSERT INTO respuesta set ?", [datos], (err, result)=>{
          if(err){
            console.log(err)
          }else{
            res.redirect('/agregarT');
          }
          
     } );           
   

}

  

  module.exports = {
    GetData,
    PostData

  };