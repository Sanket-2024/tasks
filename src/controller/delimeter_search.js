const express = require('express');
const db = require('../config/connection');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const app = express();

app.use(cookie_parser());
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));


const get_delimeter = async (req, res) => {

    try {
        if (req.cookies.token) {
            const data = req.query.s || "";
            let name = [];
            let lastname = [];
            let dob = [];
            let contact = [];
            let email = [];
            let address1 = [];
            let address2 = [];
            let age = [];
            let created_date = [];

            let sql = `select * ,DATE_FORMAT(dob, "%d/%m/%Y") as DOB,DATE_FORMAT(created_date, "%d/%m/%Y %T") as created_at From student_master`

            let response = await value(data);

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

            db.query(sql, (err, result) => {
                if (err) console.log(err);
                else res.render('../views/delimeter_search', { result, data });
            });



            async function value(data) {
                let values = [];
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

module.exports = {get_delimeter};