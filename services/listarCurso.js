var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => {
  const result = await query('SELECT * FROM curso ');
  res.json(result);
 };
 
const TraerData= async (req, res, next) => {
  const result = await query(`SELECT nombre_curso,fecha_inicio,fecha_fin,estado FROM curso
                            	INNER JOIN persona ON curso.fk_docente = persona.id_persona
	                            INNER JOIN rol ON persona.fk_rol = rol.id_rol 
                              WHERE rol.nombre_rol = 'docente' AND fk_docente =${req.query.docente}`);
  console.log(result);

  res.json(result);
};
    
    module.exports = {
      GetData,
      TraerData
    
    } 