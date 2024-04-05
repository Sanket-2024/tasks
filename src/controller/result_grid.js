const db = require('../config/connection');

const get_result = async (req, res) => {

    try {
        if (req.cookies.token) {
            const page = req.query.page || 1;
            const limit = 120;
            const offset = (Number(page) - 1) * limit;
            const lastpage = 5;

            const sql = `SELECT r.result_er_no, s.name, ext.exam_type, sum(r.theorymarks) as theory, sum(r.practicalmarks) as practical FROM result_tbl as r INNER JOIN student_master AS s ON r.result_er_no = s.stuid INNER JOIN examtype_master AS ext ON r.extype_id = ext.id INNER JOIN subject_master as sub ON r.sub_id=sub.id GROUP BY ext.id, s.stuid ORDER BY r.result_er_no LIMIT ${limit} OFFSET ${offset};`

            db.query(sql, (err, result) => {
                if (err) throw err;
                res.render('../views/result_page', { result, page, lastpage });
                console.log(result);
            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};

const get_result_data = async (req, res) => {

    try {
        if (req.cookies.token) {
            const page = req.query.page || 1;
            const id = req.query.id || 1;

            let student_data = `SELECT s.stuid,s.name,sub.subject_name,r.extype_id,r.theorymarks AS theory, r.practicalmarks AS practical FROM student_master
            AS s INNER JOIN result_tbl as r on r.result_er_no = s.stuid INNER JOIN subject_master as sub on sub.id = r.sub_id where r.result_er_no =${id};`

            let attendence_data = `SELECT COUNT(*) AS attendance FROM attendance_tbl WHERE er_no = ${id} and attendance = 'page';`

            db.query(student_data, (err, result1) => {
                if (err) throw err;
                console.log(result1);
                db.query(attendence_data, (err, result2) => {
                    if (err) throw err;
                    console.log(result2);
                    res.render('../views/result_grid', { result1, result2, id });

                });
            });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = {get_result,get_result_data};