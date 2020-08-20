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
  try {
    await db.getConnection((err, conn) => {
      if (err) {
        if (callback) callback(err, null);
        return;
      }
      //Inicia la transacción
      conn.beginTransaction( async function(err) {
        if (err) { throw err; }
        await conn.query("INSERT INTO pregunta set ?", [datos], async (err, result) => {
          if (err) { 
            conn.rollback(() => {
              throw err;
            });
          }
          //Retorna el id de la factura que se acaba de insertar
          var idPregunta = result.insertId;
          /*Llama un procedimiento almacenado para que inserte el detalle de la factura
            El procedimiento recibe como parámetros el id de la factura y el id del pedido.
            El procedimiento contiene un cursor que obtiene los productos y cantidades del detalle del pedido para saber cuales items debe agregar al detalle de la factura
          */
          await conn.query(`CALL pdetalle_factura(${id_factura}, ${req.body.pedido})`, async (err, result) => {
            if(err){
              conn.rollback(() => {
                throw err;
              });
            }
          });
          await conn.commit(async function (err) {
            if (err) {
              await conn.rollback(async function () {
                throw err;
              });
            }
            await conn.release();
            res.json(result);
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  } 


}
module.exports = {
  GetData,
  PostData
}
