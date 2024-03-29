var express = require('express');
var a = require('../config/connection');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const getresult = async (req, res) => {

    try {
        if (req.cookies.token) {
            const p = req.query.page || 1;
            const limit = 120;
            const offset = (Number(p) - 1) * limit;
            const lastpage = 5;

            const sql = `SELECT r.result_er_no, s.name, ext.exam_type, sum(r.theorymarks) as theory, sum(r.practicalmarks) as practical FROM result_tbl as r INNER JOIN student_master AS s ON r.result_er_no = s.stuid INNER JOIN examtype_master AS ext ON r.extype_id = ext.id INNER JOIN subject_master as sub ON r.sub_id=sub.id GROUP BY ext.id, s.stuid ORDER BY r.result_er_no LIMIT ${limit} OFFSET ${offset};`

            a.query(sql, (err, result) => {
                if (err) throw err;
                res.render('../views/resultView', { result, p, lastpage });
                console.log(result);
            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};

const getresult_data = async (req, res) => {

    try {
        if (req.cookies.token) {
            const p = req.query.page || 1;
            const id = req.query.id || 1;

            const sql1 = `SELECT s.stuid,s.name,sub.subject_name,r.extype_id,r.theorymarks AS theory, r.practicalmarks AS practical FROM student_master
            AS s INNER JOIN result_tbl as r on r.result_er_no = s.stuid INNER JOIN subject_master as sub on sub.id = r.sub_id where r.result_er_no =${id};`

            const sql2 = `SELECT COUNT(*) AS attendance FROM attendance_tbl WHERE er_no = ${id} and attendance = 'P';`

            a.query(sql1, (err, result1) => {
                if (err) throw err;
                console.log(result1);
                a.query(sql2, (err, result2) => {
                    if (err) throw err;
                    console.log(result2);
                    res.render('../views/dataView', { result1, result2, id });

                });
            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = {getresult,getresult_data};