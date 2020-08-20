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



 /*


  
  
  const PostData = async (req, res, next) => {
      var {texto} = req.body;
      try {
        const result = await query("INSERT INTO curso (pin_curso,nombre_curso,fecha_inicio,fecha_fin) VALUES (?)", [texto]);           
        res.json(result);
      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
    */
    
    module.exports = {
      GetData,
      TraerData
    
    } 