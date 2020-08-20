var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async(req, res, next) => {
    res.render('respuestaIN', { title: 'Express', layout: 'admin' });
};


/* agregar respuestas */
const PostData = async (req, res, next) => {
    var { texto, validacion } = req.body;
    try {
        const result = await query("INSERT INTO respuesta (texto, validacion) VALUES (?,?)", [texto], [validacion]);

        res.json(result);
    } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
    }
};



module.exports = {
    GetData, PostData
};