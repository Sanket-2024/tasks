const express = require('express');
var a = require('../config/connection');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


const searchTask05 = async (req, res) => {

    try {
        if (req.cookies.token) {


            try {

                const { stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator } = req.query;

                const p = req.query.page || 1;
                const offset = (Number(p) - 1) * 50;
                console.log(req.query.operator);
                console.log(req.query);

                var query = `SELECT *,DATE_FORMAT(dob, "%d/%m/%Y") as DOB, DATE_FORMAT(created_date, "%d/%m/%Y %T") as created_at from student_master_tbl `

                const limit = `limit 50 offset ${offset}`

                var data = "";

                const keys = Object.keys(req.query);
                console.log(keys);

                keys.forEach((k) => {

                    if (!query.includes("where") && k != 'page') query += "where";

                    if (k == 'stuid' && k != 'page') query += ` ${k} ="${req.query[k]}" `;

                    console.log(req.query[k]);

                    if (req.query[k] && k != 'operator' && k != 'stuid' && k != 'page') query += ` ${k} LIKE "%${req.query[k]}%" ${req.query['operator']} `;
                })

                if (req.query['operator'] === 'AND') data = query.slice(0, -4);

                if (req.query['operator'] === 'OR') data = query.slice(0, -3);

                console.log(query);


                console.log(data);

                if (data) {
                    a.query(data, (err, result) => {
                        if (err) console.log(err);
                        else {
                            const maxlength = Math.ceil(result.length / 50);
                            const query2 = data + limit;
                            a.query(query2, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    res.render('../views/view_04_march', { result, p, stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator, maxlength });
                                }
                            })
                        }
                    })
                } else {
                    a.query(query, (err, result) => {
                        if (err) console.log(err);
                        else {
                            const maxlength = Math.ceil(result.length / 50);
                            console.log(result.length);
                            console.log(maxlength);
                            const query2 = query + limit;
                            console.log(query2);
                            a.query(query2, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    res.render('../views/view_04_march', { result, p, stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator, maxlength });
                                }
                            })
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }


        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};

module.exports = {searchTask05};

