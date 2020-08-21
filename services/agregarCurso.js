const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);



  
  const PostData = async (req, res, next) => {
    console.log('entro al post')
    console.log(req.body);
    let {id,pin_curso,nombre_curso,fk_docente, fecha_inicio, fecha_fin,estado} = req.body;
    //este es el que no le funciona?
    //jaja si, ninguno ok danita la llamaba XD a ver ejecuta y manda datos a ver
 //estas usando mal postman, ya lo intente tambien con el jsonasmodo unas cosas
      try {
        const result = await query(
          `INSERT INTO 
            curso 
          ( 
            id, 
            pin_curso,
            fk_docente, 
            nombre_curso, 
            fecha_inicio, 
            fecha_fin,
            estado
          ) 
          VALUES 
          (
            ${id},
            ${pin_curso},
            ${fk_docente},
            '${nombre_curso}',
            '${fecha_inicio}',
            '${fecha_fin}',
            '${estado}'
          )`);           
        res.json(result);
      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
    
    
    module.exports = {
      PostData
    }