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

const getsort = async (req, res) => {

    try {
        if (req.cookies.token) {
            const p = req.query.page || 1;
            console.log(p);
            const limit = 200;
            const order = req.query.sort || 'asc';
            const order_by = req.query.select || 'stuid';
            const offset = (p - 1) * limit;
            const lastpage = Math.ceil(100000 / limit);

            var sql = `SELECT * FROM student_master_tbl ORDER BY ${order_by} ${order} LIMIT ${limit} offset ${offset}`

            a.query(sql, function (err, result) {
                if (err) throw err;
                const keys = Object.keys(result[0]);
                res.render('../views/sort_view', { result, p, order_by, keys, order, lastpage });
                console.log(result);

            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};

module.exports = {getsort};