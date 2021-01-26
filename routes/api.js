const express = require('express')
const data = require('../database')
const route = express.Router();

route.get('/',(req,res)=>{
    let total = data.length;
    let rando =Math.floor(Math.random()*(total-1));
    res.send(data);
});

module.exports = route
