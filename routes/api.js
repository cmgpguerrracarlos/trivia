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

const data = [];
route.get('/:id',(req,res)=>{
    let id = req.params.id;
    const data = [];
    const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'trivia'
    });
    console.log(id);
    con.connect();
    con.query(`SELECT * FROM data Where id=${id}`,(error,result)=>{
    if(error) throw error;
    console.log(result)

    data.push(result);
    res.send(data);
    })
    
});


route.get('/',(req,res)=>{
    const data = [];
    const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'trivia'
    });
    con.connect();
    con.query(`SELECT count(*) as total FROM data`,(error,result)=>{
    if(error) throw error;
    console.log(result)

    data.push(result);
    res.send(data);
    });
});

module.exports = route
