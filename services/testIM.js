var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async (req, res, next) => {
  res.render('testIM', { title: 'Express', layout: 'admin' });
};



const PostData = async (req, res, next) => {
  let {nombre_test, cant_preguntas_test} = req.body;

   let datos ={
     nombre_test:req.body.nombre_test,
     cant_preguntas_test:req.body.cant_preguntas_test,
   }
     await db.query("INSERT INTO test set ?", [datos], (err, result)=>{
          if(err){
            console.log(err)
          }else{
            res.redirect('/testDI');
          }
          
     } );           
   

}


module.exports = {
  GetData, PostData
};