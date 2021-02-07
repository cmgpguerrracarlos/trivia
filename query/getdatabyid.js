const mysql = require('mysql');

const getbyid = (id, data)=>{
    const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'trivia'
    });
    console.log(id);
    con.connect();
    con.query(`SELECT * FROM data`,(error,result)=>{
    if(error) throw error;
    data.push(result);
    con.end();
    return data;
});
}

 
module.exports = getbyid