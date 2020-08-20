var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

const postData = async (req, res, next) => {
    let {nombre, edad, usuario, fk_ie, constraseña} = req.body;
    console.log("entro al ");
    try {
  
         const persona= await query(`
         INSERT INTO 
         persona
          (nombre_persona,
            edad_persona,
            fk_ie)
             VALUES (
               '${nombre}',
                '${edad}',
               ${fk_ie})` );    
         const user = await query(`
         INSERT INTO
          usuario
           (usser, 
            pasword)
             VALUES 
             ('${usuario}',
             '${constraseña}')`); 
          
      res.json(persona, user);
    } catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  };
  
  module.exports = {
  postData

}