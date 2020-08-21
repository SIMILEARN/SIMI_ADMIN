var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
//este no funciona :(
  //si se puede agregar en las dos tablas a la vez?
const query = util.promisify(db.query).bind(db);

const postData = async (req, res, next) => {

    let {id_persona,nombre_persona, edad_persona, usser, fk_ie, pasword, id_usuario} = req.body;
    console.log(req.body);
   try {
  
         const persona= await query(`
         INSERT INTO 
         persona
          (
            id_persona,
            nombre_persona,
            edad_persona,
            fk_rol,
            fk_ie)
          VALUES (
            ${id_persona},
              '${nombre_persona}',
              '${edad_persona}',
              2,
              ${fk_ie}
          )` 
          );    

         const user = await query(`
         INSERT INTO
          usuario
          (
            id_usuario,
            usser, 
            pasword,
            fk_persona

          )
          VALUES 
          ( 
             ${id_usuario},
            '${usser}',
            '${pasword}',
            ${id_persona}
          )`
        ); 
          
      res.json({"success": 'ok'});
    } catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  };
  
  module.exports = {
  postData

}