var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

//consultar un docente

const TraerData = async (req, res, next) => {
    console.log(req.params.id)
   
      const result = await query(`SELECT persona.nombre_persona, usuario.usser, usuario.pasword FROM rol INNER JOIN persona ON persona.fk_rol = rol.id_rol INNER JOIN Usuario ON persona.id_persona =usuario.fk_persona WHERE rol.nombre_rol = "docente" and persona.id_persona = ${req.params.id}`);
      console.log(result[0])
      res.json(result[0]);
  
  
  };
  
  
  const PostData = async (req, res, next) => {
    const {nombre_persona, usuario, contraseña} = req.body;
      try {
        const result = await query(`
        UPDATE 
          persona 
        INNER JOIN 
          usuario 
        ON 
          usuario.fk_persona = persona.id_persona
        SET 
          persona.nombre_persona = '${nombre_persona}',
          usuario.usser= '${usuario}',
           usario.pasword='${contraseña}'
        WHERE  
          id_persona = ${req.query.id}` );           
        res.json(result);

      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
  
 
    
    module.exports = {
      
      TraerData,
     PostData
    }/*
    const resultado = await query(`
    insert into persona
    values
    (
      '${req.body.nombre_persona}',
      '${usuario}'
      )
  `);*/