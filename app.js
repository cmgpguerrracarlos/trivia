const express = require('express')
const routeApi = require('./routes/api')
const app = express();

app.use('/api',routeApi);

app.use('/',(req,res)=>{
    res.send("Bienvenido a la trivia");
});

app.listen(9000,()=>{
    console.log("server running");
});