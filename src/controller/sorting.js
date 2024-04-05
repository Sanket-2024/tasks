const express = require('express');
const db = require('../config/connection');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const app = express();

app.use(cookie_parser());
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));

const get_sort = async (req, res) => {

    try {
        if (req.cookies.token) {
            const page = req.query.page || 1;
            const limit = 200;
            const order = req.query.sort || 'asc';
            const order_by = req.query.select || 'stuid';
            const offset = (page - 1) * limit;
            const lastpage = Math.ceil(100000 / limit);

            let student_data = `SELECT * FROM student_master_tbl ORDER BY ${order_by} ${order} LIMIT ${limit} offset ${offset}`

            db.query(student_data, function (err, result) {
                if (err) throw err;
                const keys = Object.keys(result[0]);
                res.render('../views/sorting_page', { result, page, order_by, keys, order, lastpage });
                
            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};

module.exports = {get_sort};