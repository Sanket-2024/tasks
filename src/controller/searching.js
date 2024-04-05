const db = require('../config/connection');

const search_task = async (req, res) => {

    try {
        if (req.cookies.token) {

            try {

                const { stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator } = req.query;

                const page = req.query.page || 1;
                const offset = (Number(page) - 1) * 50;
                

                let query = `SELECT *,DATE_FORMAT(dob, "%d/%m/%Y") as DOB, DATE_FORMAT(created_date, "%d/%m/%Y %T") as created_at from student_master_tbl `

                const limit = `limit 50 offset ${offset}`

                let data = "";

                const keys = Object.keys(req.query);
                

                keys.forEach((k) => {

                    if (!query.includes("where") && k != 'page') query += "where";

                    if (k == 'stuid' && k != 'page') query += ` ${k} ="${req.query[k]}" `;

                    if (req.query[k] && k != 'operator' && k != 'stuid' && k != 'page') query += ` ${k} LIKE "%${req.query[k]}%" ${req.query['operator']} `;
                })

                if (req.query['operator'] === 'AND') data = query.slice(0, -4);

                if (req.query['operator'] === 'OR') data = query.slice(0, -3);

                if (data) {
                    db.query(data, (err, result) => {
                        if (err) console.log(err);
                        else {
                            const max_length = Math.ceil(result.length / 50);
                            let query_merge = data + limit;
                            db.query(query_merge, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    res.render('../views/searching_task', { result, page, stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator, max_length });
                                }
                            })
                        }
                    })
                } else {
                    db.query(query, (err, result) => {
                        if (err) console.log(err);
                        else {
                            const max_length = Math.ceil(result.length / 50);
                            let query_merge = query + limit;
                            db.query(query_merge, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    res.render('../views/searching_task', { result, page, stuid, name, lastname, dob, contact, email, address1, address2, age, created_date, operator, max_length });
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

module.exports = {search_task};

