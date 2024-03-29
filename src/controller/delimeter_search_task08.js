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


const getdelimeter = async (req, res) => {

    try {
        if (req.cookies.token) {


            const data = req.query.s || "";

            var name = [];
            var lastname = [];
            var dob = [];
            var contact = [];
            var email = [];
            var address1 = [];
            var address2 = [];
            var age = [];
            var created_date = [];

            var sql = `select * ,DATE_FORMAT(dob, "%d/%m/%Y") as DOB,DATE_FORMAT(created_date, "%d/%m/%Y %T") as created_at From student_master`

            var response = await value(data);

            response.forEach((r) => {
                if (!sql.includes(" where ")) sql += " where ";
                if (r.charAt(0) == '_') name.push(`name LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '^') lastname.push(`lastname LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '$') dob.push(`dob LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '{') contact.push(`contact LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '}') email.push(`email LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == ':') address1.push(`address1 LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '>') address2.push(`address2 LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '<') age.push(`age LIKE "%${r.slice(1)}%"`);
                if (r.charAt(0) == '|') created_date.push(`created_date LIKE "%${r.slice(1)}%"`);

            });

            if (name.length > 0) sql += name.join(" OR ") + " AND ";
            if (lastname.length > 0) sql += lastname.join(" OR ") + " AND ";
            if (dob.length > 0) sql += dob.join(" OR ") + " AND ";
            if (contact.length > 0) sql += contact.join(" OR ") + " AND ";
            if (email.length > 0) sql += email.join(" OR ") + " AND ";
            if (address1.length > 0) sql += address1.join(" OR ") + " AND ";
            if (address2.length > 0) sql += address2.join(" OR ") + " AND ";
            if (age.length > 0) sql += age.join(" OR ") + " AND ";
            if (created_date.length > 0) sql += created_date.join(" OR ") + " AND ";


            if (sql.includes("where")) sql = sql.slice(0, -4);

            console.log(sql);

            a.query(sql, (err, result) => {
                if (err) console.log(err);
                else res.render('../views/search_data', { result, data });
            });



            async function value(data) {
                var values = [];
                let i = 0;

                while (i < data.length) {
                    let v = data.charAt(i);
                    let j = i + 1;
                    while (data.charAt(j) != '_' && data.charAt(j) != '^' && data.charAt(j) != '$' && data.charAt(j) != '{' && data.charAt(j) != '}' && data.charAt(j) != ':' && data.charAt(j) != '<' && data.charAt(j) != '>' && data.charAt(j) != '|' && j != data.length) {
                        v += data.charAt(j);
                        j++;
                    }
                    values.push(v);
                    i = j;
                }
                return values;
            }

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = {getdelimeter};