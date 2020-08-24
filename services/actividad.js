const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => { 
  //const result = await query();

  const result = await query('SELECT * FROM estrategia');

  
  res.render('actividad',{ estrategia: result, title: 'Express', layout: 'admin' });

}

const postData = async (req, res, next) => {
  //let { fk_estrategia, actitividad} = req.body;
  
  console.log("entro al post");
   let datos ={
    fk_estrategia:req.body.fk_estrategia,
    actividad:req.body.actividad
   }
     await db.query("INSERT INTO actividad set ?", [datos], (err, result)=>{
          if(err){
            console.log(err)
          }else{
            res.redirect('/actividad');
          }
          
     } );           
   

}


module.exports = {
  GetData, postData
}
