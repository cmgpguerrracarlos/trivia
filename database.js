const express = require('express')
const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'trivia'
});



const data = [
    {id:1, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:2, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:3, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:4, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:5, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:6, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:7, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:8, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:9, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:10, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:11, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:12, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:13, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:14, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"},
    {id:15, title:"el titulo de la app",op1:"uno",op2:"dos",op3:"tres",op4:"cuatro",op5:"cinco",correcto:"tres"} 
];

 
module.exports = data