var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

const query = util.promisify(db.query).bind(db);

/* traer resultados de un test de im por ID estudiante  */
const TraerResultado = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const result = await query(`
        SELECT *  FROM resultado_test
        INNER JOIN detalle_resultado On  resultado_test.fk_detalle_resultado= detalle_resultado.id
        INNER JOIN intento On intento.id =detalle_resultado.fk_intento
        INNER JOIN  inscripcion ON intendo.fk_inscripcion =inscripcion.id
        INNER JOIN  persona ON inscripcion.fk_estudiante =persona.id_persona
        where persona.id_persona= ${req.params.id}`);
        res.json(result);
    }
    catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
    }
};

module.exports = {

    TraerResultado

} 