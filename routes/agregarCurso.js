const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async (req, res, next) => {
  console.log(req.params.id)
    const result = await query(`SELECT nombre_curso,fecha_inicio,fecha_fin, estado  FROM curso WHERE fk_docente ='${req.params.id}'`);

  };
  
  /* traer un curso */
  const TraerData = async (req, res, next) => {
    console.log(req.params.id)
    try {
      const result = await query(`SELECT pin_curso,nombre_curso,fecha_inicio,fecha_fin, estado  FROM curso WHERE pin_curso = '${req.params.id}'`);
      res.json(result);
    }
    catch (error) {
      console.log('Error =>', error);
      res.send(error.sqlMessage);
    }
  };
  
  
  
  const PostData = async (req, res, next) => {
      var {texto} = req.body;
      try {
        const result = await query("INSERT INTO curso (pin_curso,nombre_curso,fecha_inicio,fecha_fin) VALUES (?)", [texto]);           
        res.json(result);
      } catch (error) {
        console.log('Error =>', error);
        res.send(error.sqlMessage);
      }
    };
    
    
    module.exports = {
      GetData,
      PostData,
      TraerData
    }