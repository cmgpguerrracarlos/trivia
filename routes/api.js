const express = require('express')
const getbyid = require('../query/getdatabyid');
const route = express.Router();
const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'trivia'
});

route.get('/',(req,res)=>{
    const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'trivia'
    });
    con.connect();

    con.query(`SELECT * FROM data ORDER BY RAND() LIMIT 1`,(error,result)=>{
    if(error) throw error;
    res.send(result);
    });
    con.end();
});

module.exports = route
