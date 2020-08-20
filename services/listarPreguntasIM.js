var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

const query = util.promisify(db.query).bind(db);

/* traer   preguntas de un test de im  */
const TraerPreguntas = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const result = await query(`
        SELECT texto 
        FROM pregunta
         INNER JOIN 
      tema On  tema.id = pregunta.fk_tema
        INNER JOIN 
     tipo_tema ON tema.fk_tipo_tema=tipo_tema.id_tipotema 
         where
      tipo_Tema.id_tipotema= ${req.params.id}`);
        res.json(result);
    }
    catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
    }
};

module.exports = {

    TraerPreguntas

} 