var mysql = require('mysql');

var pool  = mysql.createPool({
    Host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'simi'
});

exports.pool = pool;
