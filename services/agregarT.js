var express = require('express');
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
/* GET home page. */

const GetData = async (req, res, next) => { 
  //const result = await query();
  const result = await query('SELECT * FROM tipo_tema');

  res.render('agregarT', { tipo: result,  layout: 'admin', title: 'Agregar Tema' })



}
/* agregar tematicas */
const postData = async (req, res, next) => {
  let {  nombre, fk_tipo_tema} = req.body;
  try {
    const result = await query("INSERT INTO test (nombre, fk_tipo_tema) VALUES (?,?)", [nombre], [fk_tipo_tema] );           
    res.json(result);
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }
}




module.exports = {
  GetData,
  postData
}