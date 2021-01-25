const express = require('express')
const routeApi = require('./routes/api')
const app = express();
const cors = require('cors');
app.use(cors());
app.use('/api',routeApi);

app.use('/',(req,res)=>{
    res.send("<h1>Bienvenido a la trivia, para ir a la api  <a href='/api'>hace click aca</a></h1>");
});

app.listen(9000,()=>{
    console.log("server running");
});
