var mysql = require('mysql');

var pool  = mysql.createPool({
    Host     : 'us-cdbr-east-02.cleardb.com',
    user     : 'b2982d2a9ead65',
    password : '845d7be3',
    database : 'heroku_c96e248066e8d6a'
});

exports.pool = pool;