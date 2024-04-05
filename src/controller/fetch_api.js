const express = require('express');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(cookie_parser());
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));

const fetch_fun_one = async (req,res)=>{

try {
    if (req.cookies.token) {

        res.sendFile(path.join(__dirname, '../../public', 'pages', 'fetch_api_info.html'));


    } else {
        res.redirect('/login');
    }
} catch (e) {
    console.log(e);
}
}

const fetch_fun_two = async (req,res)=>{

    try {
        if (req.cookies.token) {

            res.sendFile(path.join(__dirname, '../../public', 'pages', 'fetch_api_detail.html'));


        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = {fetch_fun_one, fetch_fun_two};