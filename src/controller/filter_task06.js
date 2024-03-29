var express = require('express');
var a = require('../config/connection');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const filter1 = async (req, res)=> {

    try {
        if (req.cookies.token) {
            const p = req.query.page || 1;
            console.log(p);
            const limit = 50;
            const offset = (p - 1) * limit;
            const lastpage = Math.ceil(200 / limit);
            const m = req.query.month || 'december2023'
            const y = m.slice(0, -4);

            var sql = "SELECT s.stuid,s.name,monthname(a.date) as month,count(a.attendance)as presentDay  FROM student_master as s INNER JOIN attendance_tbl as a ON s.stuid = a.er_no WHERE a.attendance = 'P' group by s.stuid,month having month='" + y + "' ORDER BY a.er_no LIMIT " + limit + " offset " + offset + ";"

            a.query(sql, function (err, result) {
                if (err) throw err;
                res.render('../views/data', { result, p, m, lastpage });
                console.log(result);
            });

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {filter1};