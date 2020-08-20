const util = require('util');
const db = require('../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

const GetData = async (req, res, next) => { 
  //const result = await query();
  res.render('agregarE', { title: 'Express', layout: 'admin' });

}

module.exports = {
  GetData
}