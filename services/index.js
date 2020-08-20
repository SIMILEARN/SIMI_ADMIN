var express = require('express');
var router = express.Router();
const util = require('util');
const db = require('./../connection').Pool;

// Promesas nativas
const query = util.promisify(db.query).bind(db);

/* GET home page. */
const GetData = async(req, res, next) => {
  res.render('index', { title: 'Express', layout: 'admin' });
};

module.exports = {
  GetData
}