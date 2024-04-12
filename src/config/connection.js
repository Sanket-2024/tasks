const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
});

con.connect((err) =>{
    if(err) throw err;
    console.log("login Database Connected!")
});

module.exports = con;