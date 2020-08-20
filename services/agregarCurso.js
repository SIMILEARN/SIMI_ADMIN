const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);



  
  const PostData = async (req, res, next) => {
    let {id,pin,nombre,fk_docente, fechaI, fechaf,estado} = req.body;
    
      try {
        const result = await query(
          `INSERT INTO 
         curso 
        (  'id', 
          'pin_curso',
           'fk_docente', 
           'nombre_curso', 
          'fecha_inicio', 
          'fecha_fin',
           'estado') 
          VALUES (
            ${id},
            ${pin},
            '${fk_docente}',
            '${nombre}',
            '${fechaI}',
            '${fechaf}',
            ${estado})`);           
        res.json(result);
      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
    
    
    module.exports = {
  
      PostData
  
    }