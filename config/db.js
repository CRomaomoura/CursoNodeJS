var mysql = require('mysql');

var con = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'password',
        database:'curso_node'
        });
    };
    module.exports = con;