const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => { 
  //const result = await query();

  const inteligencia = await query('SELECT tema.nombre FROM tipo_tema INNER JOIN tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema WHERE tipo_tema.tipo_tema = "Inteligencias Multiples"');

  const tema = await query('SELECT tema.nombre FROM tipo_tema INNER JOIN tema ON tema.fk_tipo_tema = tipo_tema.id_tipotema WHERE tipo_tema.tipo_tema = "Ingles"');

  res.render('agregarE',{ inteligencia: inteligencia, tema: tema, title: 'Express', layout: 'admin' });

}

const postData = async (req, res, next) => {
  let { fk_tema, fk_inteligencia, actividad, nombre_estrategia} = req.body;
  
  console.log("entro al post");
   let datos ={
    fk_tema:req.body.fk_tema,
    fk_inteligencia:req.body.fk_inteligencia,
    nombre_estrategia:req.body.nombre_estrategia,
   }
     await db.query("INSERT INTO estrategia set ?", [datos], (err, result)=>{
          if(err){
            console.log(err)
          }else{
            res.redirect('/agregarE');
          }
          
     } );           
   

}


module.exports = {
  GetData, postData
}
