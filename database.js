const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'trivia'
});

const data = [];

con.connect();

con.query('SELECT * FROM data',(error,result)=>{
    if(error) throw error;
    data.push(result);
});

con.end();
 
module.exports = data