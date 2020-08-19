var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);



const GetData = async (req, res, next) => {

 
  //const progreso = await query(`CALL progreso(${nombre}))`);
  const docente = await query('SELECT persona.nombre_persona, persona.imagen_usuario, ie.nombre_insitucion FROM rol INNER JOIN persona ON persona.fk_rol = rol.id_rol INNER JOIN ie ON persona.fk_ie = ie.id_insitucion WHERE rol.nombre_rol = "docente" ');
  res.render('profesores', { profesor: docente, layout: 'admin', title: 'Docentes' })
};



module.exports = {
  GetData
}