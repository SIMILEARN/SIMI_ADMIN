var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => {
    const result = await query('SELECT * FROM pregunta');
    res.json(result);
};

/* traer nombre de un test de im  */
const TraerData = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const result = await query(`SELECT tipo_tema FROM tipo_tema
      INNER JOIN tema On  tema.fk_tipo_tema = tipo_tema.id_tipotema
     INNER JOIN pregunta ON tema.id=pregunta.fk_tema where tipo_Tema.id_tipotema='${req.params.id}'`);
        res.json(result);
    }
    catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
    }
};



module.exports = {
    GetData,
    TraerData

} 