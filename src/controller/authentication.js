const express = require('express');
const a = require('../config/connection');
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');


var app = express();

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const getregister = async (req,res)=>{

    // app.get('/', async (req, res) => {

    var sqlselect = [[]];
    var sqlcheckselect = [[]];
    var hours = 0;

    res.render("../views/registration", { sqlselect, hours, sqlcheckselect });

};

const postregister = async (req, res)=>{

    // app.post('/', async (req, res) => {

    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var id = null;
    var activationCode = null;
    var hours = null;
    var sqlselect = [[]];


    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr.length);

    var sault = "";
    var activationCode = "";

    for (let i = 0; i < 4; i++) {

        sault += arr[Math.floor(Math.random() * 62)];

    }

    for (let i = 0; i < 12; i++) {

        activationCode += arr[Math.floor(Math.random() * 62)];

    }

    console.log(sault);
    console.log(activationCode);

    var sqlcheck = `SELECT * FROM registrationdetails_tbl WHERE email = '${email}'`;

    const sqlcheckselect = await a.promise().query(sqlcheck);
    console.log(sqlcheckselect);

    if (sqlcheckselect[0][0]) {
        res.render("../views/registration", { id, sqlselect, sqlcheckselect, activationCode, hours });
    } else {


        var sql = `INSERT INTO registrationdetails_tbl(firstname, lastname, email, sault, activation_code) VALUES(?,?,?,?,?);`

        const regInsert = await a.promise().query(sql, [fname, lname, email, sault, activationCode], (err, result) => {
            if (err) throw err;
            // console.log(result);

        });
        console.log(regInsert);

        const x = regInsert[0].insertId;
        console.log(x);


        res.render('../views/activation', { x, activationCode });
    }

};

const getpassword = async (req,res)=>{

// app.get('/activation/:id', async (req, res) => {

    const id = req.params.id;
    const activationCode = req.query.activationCode;
    const sqlcheckselect = [[]];
    console.log(req.params.id);
    console.log(activationCode);


    const sql = ` SELECT * FROM registrationdetails_tbl WHERE id = ?`;

    const sqlselect = await a.promise().query(sql, [id]);
    console.log(sqlselect);

    var diff = new Date().valueOf() - sqlselect[0][0].created_date.valueOf();
    let hours = Math.floor(diff / (1000 * 60 * 60));

    res.render("../views/registration", { id, sqlselect, sqlcheckselect, activationCode, hours });

};

const postpassword = async (req,res)=>{

// app.post('/activation/:id', async (req, res) => {

    var id = req.params.id;
    var re_entered_password = req.body.re_entered_password;
    var sault = req.body.sault;
    console.log(re_entered_password);
    console.log(sault);

    const passwordMd5 = md5(re_entered_password + sault);
    console.log(re_entered_password + sault);
    console.log(passwordMd5);

    var updatesql = `UPDATE registrationdetails_tbl SET password='${passwordMd5}' WHERE  id = '${id}'`;

    const updatePassword = await a.promise().query(updatesql);

    console.log(updatePassword);
    res.render('../views/log', { id });

};

const getlogin = async(req,res)=>{ 

// app.get('/login', (req, res) => {

    const id = req.params.id || "";
    var username = null;
    var password = null;

    res.render('../views/login', { id, username, password });

};


const postlogin = async (req,res)=>{
// app.post('/login', async (req, res) => {

    const id = req.params.id || "";
    const username = req.body.username;
    const password = req.body.password;

    var sql = `SELECT * FROM registrationdetails_tbl WHERE email = '${username}'`;

    const registrationData = await a.promise().query(sql);
    console.log(registrationData);

    const passwordMd5 = md5(password + registrationData[0][0].sault);
    console.log(passwordMd5);

    if (username === registrationData[0][0].email && passwordMd5 === registrationData[0][0].password) {

        const token = jwt.sign({ id }, `passwordMd5`, { expiresIn: '1h' });
        res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
        // res.send("Login Successful!");
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

module.exports = {postregister, postlogin, getpassword, postpassword, getlogin, getregister, home};