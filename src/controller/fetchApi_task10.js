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

const fetchfun1 = async (req,res)=>{

try {
    if (req.cookies.token) {

        res.sendFile(path.join(__dirname, '../../public', 'pages', 'info.html'));


    } else {
        res.redirect('/login');
    }
} catch (e) {
    console.log(e);
}
}

const fetchfun2 = async (req,res)=>{

    try {
        if (req.cookies.token) {

            res.sendFile(path.join(__dirname, '../../public', 'pages', 'detail.html'));


        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = {fetchfun1, fetchfun2};