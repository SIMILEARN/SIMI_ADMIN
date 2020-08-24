var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('../utils/database').pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async (req, res, next) => {

  const result = await query('SELECT * FROM pregunta');

  res.render('respuestaDI', { pregunta: result, title: 'Express', layout: 'admin' });
};


const PostData = async (req, res, next) => {
  console.log(req.body.texto)
  console.log("entro al post");
  let { texto, texto2, texto3, fk_pregunta, imagen_respuesta, imagen_respuesta2, imagen_respuesta3, validacion, validacion2, validacion3 } = req.body;
  console.log(req.body);
 

  
 console.log(val);
  try {

    const respuesta1 = await query(`
       INSERT INTO 
       respuesta
        (
          fk_pregunta,
          texto,
          validacion,
          imagen_respuesta
          )
        VALUES (
          ${fk_pregunta},
            '${texto}',
            1,
            '${imagen_respuesta}' 
        )`
    );
    const respuesta2 = await query(`
    INSERT INTO 
    respuesta
     (
       fk_pregunta,
       texto,
       validacion,
       imagen_respuesta
       )
     VALUES (
       ${fk_pregunta},
         '${texto2}',
         0,
         '${imagen_respuesta2}' 
     )`
    );
    const respuesta3 = await query(`
    INSERT INTO 
    respuesta
      (
        fk_pregunta,
        texto,
        validacion,
        imagen_respuesta
        )
      VALUES (
    ${fk_pregunta},
      '${texto3}',
      0,
      '${imagen_respuesta3}' 
  )`
    );

    res.redirect('/respuestaDI');
    res.json({ "success": 'ok' });
  } catch (error) {
    console.log('Error =>', error);
    res.send(error.sqlMessage);
  }


}

module.exports = {
  GetData,
  PostData

};