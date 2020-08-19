
var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);
const getData = async (req, res, next) => {
    console.log(req.params.id)
    try {
      const result = await query(
        `SELECT
         usuario.usser, 
         usuario.pasword
           FROM
             persona 
              INNER JOIN
               Usuario 
               ON
                persona.id_persona =usuario.fk_persona 
                WHERE usuario.usser= '${req.params.id}'`);
      res.json(result);
    }
    catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }

  };
  
  module.exports = {
  getData

  }