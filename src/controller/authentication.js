const express = require('express');
const db = require('../config/connection');
const body_parser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const app = express();

app.use(cookie_parser());
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));

const get_register = async (req,res)=>{

    // app.get('/', async (req, res) => {

    let sqlselect = [[]];
    let sqlcheckselect = [[]];
    let hours = 0;

    res.render("../views/registration", { sqlselect, hours, sqlcheckselect });

};

const post_register = async (req, res)=>{

    // app.post('/', async (req, res) => {

    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let id = null;
    // let activationCode = null;
    let hours = null;
    let sqlselect = [[]];


    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr.length);

    var sault = "";
    let activationCode = "";

    for (let i = 0; i < 4; i++) {

        sault += arr[Math.floor(Math.random() * 62)];

    }

    for (let i = 0; i < 12; i++) {

        activationCode += arr[Math.floor(Math.random() * 62)];

    }

    console.log(sault);
    console.log(activationCode);

    let sqlcheck = `SELECT * FROM registrationdetails_tbl WHERE email = '${email}'`;

    const sqlcheckselect = await db.promise().query(sqlcheck);
    console.log(sqlcheckselect);

    if (sqlcheckselect[0][0]) {
        res.render("../views/registration", { id, sqlselect, sqlcheckselect, activationCode, hours });
    } else {


        let sql = `INSERT INTO registrationdetails_tbl(firstname, lastname, email, sault, activation_code) VALUES(?,?,?,?,?);`

        const regInsert = await db.promise().query(sql, [fname, lname, email, sault, activationCode], (err, result) => {
            if (err) throw err;            

        });
        console.log(regInsert);

        const x = regInsert[0].insertId;
        console.log(x);


        res.render('../views/activation', { x, activationCode });
    }

};

const get_password = async (req,res)=>{

    const id = req.params.id;
    const activationCode = req.query.activationCode;
    const sqlcheckselect = [[]];
    console.log(req.params.id);
    console.log(activationCode);

    const sql = ` SELECT * FROM registrationdetails_tbl WHERE id = ?`;

    const sqlselect = await db.promise().query(sql, [id]);
    console.log(sqlselect);

    let diff = new Date().valueOf() - sqlselect[0][0].created_date.valueOf();
    let hours = Math.floor(diff / (1000 * 60 * 60));

    res.render("../views/registration", { id, sqlselect, sqlcheckselect, activationCode, hours });

};

const post_password = async (req,res)=>{

    let id = req.params.id;
    let re_entered_password = req.body.re_entered_password;
    let sault = req.body.sault;
    console.log(re_entered_password);
    console.log(sault);

    const passwordMd5 = md5(re_entered_password + sault);
    console.log(re_entered_password + sault);
    console.log(passwordMd5);

    let updatesql = `UPDATE registrationdetails_tbl SET password='${passwordMd5}' WHERE  id = '${id}'`;

    const updatePassword = await db.promise().query(updatesql);

    console.log(updatePassword);
    res.render('../views/log', { id });

};

const get_login = async(req,res)=>{ 

    const id = req.params.id || "";
    let username = null;
    let password = null;

    res.render('../views/login', { id, username, password });

};


const post_login = async (req,res)=>{


    const id = req.params.id || "";
    const username = req.body.username;
    const password = req.body.password;

    let sql = `SELECT * FROM registrationdetails_tbl WHERE email = '${username}'`;

    const registrationData = await db.promise().query(sql);
    // console.log(registrationData);

    
    const passwordMd5 = md5(password + registrationData[0][0].sault);
    console.log(passwordMd5);
    

    if (username === registrationData[0][0].email && passwordMd5 === registrationData[0][0].password) {

        const token = jwt.sign({ id }, `passwordMd5`, { expiresIn: '1h' });
        res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
        
        return res.redirect("/home");

    } else {

        return res.redirect('/login');

    }

};

const home = async (req,res)=>{

// app.get('/home', (req, res) => {
    console.log(req.cookies);
    console.log(req.query);
    console.log(req.cookies.token);
    const username = "";
    const password = "";
    const id = "";
    if (req.cookies.token) {
        res.render('../views/home');
    } else {
        res.redirect('/login');
    }
};

module.exports = {post_register, post_login, get_password, post_password, get_login, get_register, home};