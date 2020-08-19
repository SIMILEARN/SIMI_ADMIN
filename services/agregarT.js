var express = require('express');
const util = require('util');
const db = require('../utils/database').pool;

const query = util.promisify(db.query).bind(db);
const modelo ={};
modelo.GetData = async (req, res, next) => { 
  //const result = await query();
  const result = await query('SELECT * FROM tipo_tema');
  const tema = await query('SELECT * FROM tema');
  res.render('agregarT', { tipo: result, tema:tema, layout: 'admin', title: 'Agregar Tema' })
}
/* agregar tematicas */
modelo.postData = async (req, res, next) => {
  let {nombre, tipoTema} = req.body;
  console.log(req.body.nombre);
  console.log(req.body.tipoTema);
  console.log("entro al post");
   let datos ={
     nombre:req.body.nombre,
     fk_tipo_tema:req.body.tipoTema,
   }
     await db.query("INSERT INTO tema set ?", [datos], (err, result)=>{
          if(err){
            console.log(err)
          }else{
            res.redirect('/agregarT');
          }
          
     } );           
   

}

module.exports = modelo;