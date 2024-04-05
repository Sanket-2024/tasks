const db = require('../config/connection');

const filter = async (req, res)=> {

    try {
        if (req.cookies.token) {
            const page = req.query.page || 1;
            const limit = 50;
            const offset = (page - 1) * limit;
            const last_page = Math.ceil(200 / limit);
            const month = req.query.month || 'december2023'
            const year_split = month.slice(0, -4);

            let sql = "SELECT s.stuid,s.name,monthname(a.date) as month,count(a.attendance)as presentDay  FROM student_master as s INNER JOIN attendance_tbl as a ON s.stuid = a.er_no WHERE a.attendance = 'P' group by s.stuid,month having month='" + year_split + "' ORDER BY a.er_no LIMIT " + limit + " offset " + offset + ";"

            db.query(sql, function (err, result) {
                if (err) throw err;
                res.render('../views/filter', { result, page, month, last_page });
                console.log(result);
            });

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {filter};