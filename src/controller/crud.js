const express = require('express');
const db = require('../config/connection');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const app = express();
app.use(cookie_parser());
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));

const get_data = async (req, res) => {
    try {
        if (req.cookies.token) {
            let work_record_id = req.body.workRecordId || [];
            let education_id = req.body.educationId || [];
            let language_id = req.body.languageId || [];
            let techrecord = req.body.techrecord || [];
            let empid = req.body.empid || null;
            let b_fname = req.body.b_fname || null;
            let b_lname = req.body.b_lname || null;
            let b_designation = req.body.b_designation || null;
            let b_address1 = req.body.b_address1 || null;
            let b_address2 = req.body.b_address2 || null;
            let b_email = req.body.b_email || null;
            let b_phoneno = req.body.b_phoneno || null;
            let b_city = req.body.b_city || null;
            let b_gender = req.body.b_gender || null;
            let b_zipcode = req.body.b_zipcode || null;
            let b_relationship = req.body.b_relationship || null;
            let b_dob = req.body.b_dob || null;
            let e_nameofboard = req.body.e_nameofboard || [];
            let e_passingyear = req.body.e_passingyear || [];
            let e_percentage = req.body.e_percentage || [];

            let w_companyname = req.body.w_companyname || [];
            let w_designation = req.body.w_designation || [];
            let w_from = req.body.w_from || [];
            let w_to = req.body.w_to || [];

            let language_name = req.body.languageName || [];
            let read = req.body.read || [];
            let write = req.body.write || [];
            let speak = req.body.speak || [];

            let tech = req.body.tech || [];
            let php = req.body.php || null;
            let mysql = req.body.mysql || null;
            let laravel = req.body.laravel || null;
            let oracle = req.body.oracle || null;

            let ref_name = req.body.ref_name || [];
            let ref_contactno = req.body.ref_contactno || [];
            let ref_relation = req.body.ref_relation || [];

            let prefered_location = req.body.preferedlocation || null;
            let notice_period = req.body.noticeperiod || null;
            let expected_ctc = req.body.expectedctc || null;
            let current_ctc = req.body.currentctc || null;
            let department = req.body.department || null;

            res.render('../views/crud_form', { work_record_id, education_id, language_id, techrecord, empid, b_fname, b_lname, b_designation, b_address1, b_address2, b_email, b_phoneno, b_city, b_gender, b_zipcode, b_relationship, b_dob, e_nameofboard, e_passingyear, e_percentage, w_companyname, w_designation, w_from, w_to, language_name, read, write, speak, tech, php, mysql, laravel, oracle, ref_name, ref_contactno, ref_relation, prefered_location, notice_period, expected_ctc, current_ctc, department });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

const post_data = async (req,res)=>{
    try {
        if (req.cookies.token) {
            let b_fname = req.body.b_fname || null;
            let b_lname = req.body.b_lname || null;
            let b_designation = req.body.b_designation || null;
            let b_address1 = req.body.b_address1 || null;
            let b_address2 = req.body.b_address2 || null;
            let b_email = req.body.b_email || null;
            let b_phoneno = req.body.b_phoneno || null;
            let b_city = req.body.b_city || null;
            let b_gender = req.body.b_gender || null;
            let b_zipcode = req.body.b_zipcode || null;
            let b_relationship = req.body.b_relationship || null;
            let b_dob = req.body.b_dob || null;
            let e_nameofboard = req.body.e_nameofboard || [];
            let e_passingyear = req.body.e_passingyear || [];
            let e_percentage = req.body.e_percentage || [];
           
            let w_companyname = req.body.w_companyname || [];
            let w_designation = req.body.w_designation || [];
            let w_from = req.body.w_from || [];
            let w_to = req.body.w_to || [];

            let language_name = req.body.languageName || [];
            let read = req.body.read || [];
            let write = req.body.write || [];
            let speak = req.body.speak || [];

            let tech = req.body.tech || [];
            let php = req.body.php || null;
            let mysql = req.body.mysql || null;
            let laravel = req.body.laravel || null;
            let oracle = req.body.oracle || null;            

            let ref_name = req.body.ref_name || [];
            let ref_contactno = req.body.ref_contactno || [];
            let ref_relation = req.body.ref_relation || [];

            let prefered_location = req.body.preferedlocation || null;
            let notice_period = req.body.noticeperiod || null;
            let expected_ctc = req.body.expectedctc || null;
            let current_ctc = req.body.currentctc || null;
            let department = req.body.department || null;

            let sqlBasic = `INSERT INTO employeebasic_details(firstname, lastname, dob, email, phoneno, address1, address2, designation, gender_id, relationship_id,city, zipcode) VALUES('${b_fname}', '${b_lname}', '${b_dob}', '${b_email}', '${b_phoneno}', '${b_address1}', '${b_address2}', '${b_designation}', '${b_gender}', '${b_relationship}','${b_city}', '${b_zipcode}');`
            const basicDtl = await db.promise().query(sqlBasic);
            const employee_id = basicDtl[0].insertId;
            // Education Details
            for (let i = 0; i < e_nameofboard.length; i++) {
                if (e_nameofboard[i]) {
                    let sql_education = `INSERT INTO education_detail(edu_id, passingyear, percentage, edu_empid) VALUES('${e_nameofboard[i]}','${e_passingyear[i]}', '${e_percentage[i]}', '${employee_id}')`;
                    const edu_dtl = await db.promise().query(sql_education);               
                }
            }
            // Work Experience
            for (let i = 0; i < w_companyname.length; i++) {
                if (w_companyname[i]) {
                    let sql_work_exp = `INSERT INTO workexperience (work_empid,companyname,work_from,work_to,designation) VALUES('${employee_id}','${w_companyname[i]}', '${w_from[i]}', '${w_to[i]}', '${w_designation[i]}')`;
                    const work_dtl = await db.promise().query(sql_work_exp);
                }
            }
           //language
            if (!read[0]) { read[0] = 0 };
            if (!write[0]) { write[0] = 0 };
            if (!speak[0]) { speak[0] = 0 };
            if (!read[1]) { read[1] = 0 };
            if (!write[1]) { write[1] = 0 };
            if (!speak[1]) { speak[1] = 0 };
            if (!read[2]) { read[2] = 0 };
            if (!write[2]) { write[2] = 0 };
            if (!speak[2]) { speak[2] = 0 };            

            let sql_language1 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${language_name[0]}','${read[0]}','${write[0]}','${speak[0]}')`;
            let sql_language2 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${language_name[1]}','${read[1]}','${write[1]}','${speak[1]}')`;
            let sql_language3 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${language_name[2]}','${read[2]}','${write[2]}','${speak[2]}')`;
            await db.promise().query(sql_language1);
            await db.promise().query(sql_language2);
            await db.promise().query(sql_language3);
            // Technologies 
            let sql_tech = `INSERT INTO technologies_tbl(empid, technologies_id, skilllevel_id) VALUES(${employee_id},?,?)`;
            if (tech[0]) { await db.promise().query(sql_tech, [tech[0], php]);}
            if (tech[1]) { await db.promise().query(sql_tech, [tech[1], mysql]);}
            if (tech[2]) { await db.promise().query(sql_tech, [tech[2], laravel]);}
            if (tech[3]) { await db.promise().query(sql_tech, [tech[3], oracle]);}
            // Reference Contact
            for (let i = 0; i < ref_name.length; i++) {
                if (ref_name[i]) {
                    let sql_reference = `INSERT INTO referencecontact_tbl(ref_empid, name, contactno, relation) VALUES(${employee_id}, '${ref_name[i]}', '${ref_contactno[i]}', '${ref_relation[i]}')`;
                    await db.promise().query(sql_reference);
                }
            }
            // preference 
            let sql_pref = `INSERT INTO preference_tbl(pref_empid, prefered_location, noticeperiod, expectedctc, currentctc, department_id) VALUES(${employee_id}, '${prefered_location}', '${notice_period}', '${expected_ctc}', '${current_ctc}', '${department}')`;
            await db.promise().query(sql_pref);
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

const data_grid = async (req,res)=>{
    try {
        if (req.cookies.token) {
            let p = req.query.page || 1;
            const limit = 20;
            const offset = (Number(p) - 1) * limit;
            const lastpage = Math.ceil(300 / limit);

            let data_grid_sql = `SELECT * FROM employeebasic_details limit ${limit} offset ${offset} ;`
            const sd = await db.promise().query(data_grid_sql);        
            res.render('../views/ajax_form_data', { sd, lastpage, p });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
} 

const get_updatedata = async (req,res)=>{
    try {
        if (req.cookies.token) {
            let inserted_id = req.query.id || 1;
            let sql_basic_select = `SELECT * FROM employeebasic_details WHERE emp_id = ${inserted_id}`;
            let sql_edu_select = `SELECT * FROM education_detail WHERE edu_empid = ${inserted_id}`;
            let sql_work_select = `SELECT * FROM workexperience WHERE work_empid = ${inserted_id}`;
            let sql_language_select = `SELECT * FROM language_tbl WHERE language_empid = ${inserted_id}`;
            let sql_tech_select = `SELECT * FROM technologies_tbl WHERE empid = ${inserted_id}`;
            let sql_ref_select = `SELECT * FROM referencecontact_tbl WHERE ref_empid = ${inserted_id}`;
            let sql_pref_select = `SELECT * FROM preference_tbl WHERE pref_empid = ${inserted_id}`;
            const update_basic_dtl = await db.promise().query(sql_basic_select);
            const update_edu_dtl = await db.promise().query(sql_edu_select);
            const update_work_dtl = await db.promise().query(sql_work_select);
            if (!update_work_dtl) {
                const update_work_dtl = [];
            }
            const update_language_dtl = await db.promise().query(sql_language_select);
            if (!update_language_dtl) {
                const update_language_dtl = [];
            }
            const update_tech_dtl = await db.promise().query(sql_tech_select);
            if (!update_tech_dtl) {
                const update_tech_dtl = [];
            }
            const update_ref_dtl = await db.promise().query(sql_ref_select);
            if (!update_ref_dtl) {
                const update_ref_dtl = [];
            }
            const update_pref_dtl = await db.promise().query(sql_pref_select) || [];
            res.render('../views/crud_update_form', { update_basic_dtl, update_edu_dtl, update_work_dtl, update_language_dtl, update_tech_dtl, update_ref_dtl, update_pref_dtl });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

const post_updatedata = async (req,res)=>{

    try {
        if (req.cookies.token) {
            let work_record_id = req.body.workRecordId || [];
            let education_id = req.body.educationId || [];
            let language_id = req.body.languageId || [];
            let tech_record = req.body.techrecord || [];

            let empid = req.body.empid || 100;
            let b_fname = req.body.b_fname;
            let b_lname = req.body.b_lname;
            let b_designation = req.body.b_designation;
            let b_address1 = req.body.b_address1;
            let b_address2 = req.body.b_address2;
            let b_email = req.body.b_email;
            let b_phoneno = req.body.b_phoneno;
            let b_city = req.body.b_city;
            let b_gender = req.body.b_gender;
            let b_zipcode = req.body.b_zipcode;
            let b_relationship = req.body.b_relationship;
            let b_dob = req.body.b_dob;     

            let e_nameofboard = req.body.e_nameofboard;
            let e_passingyear = req.body.e_passingyear;
            let e_percentage = req.body.e_percentage;

            let w_companyname = req.body.w_companyname;
            let w_designation = req.body.w_designation;
            let w_from = req.body.w_from;
            let w_to = req.body.w_to;
          
            let language_name = req.body.languageName || [];
            let read = req.body.read || [];
            let write = req.body.write || [];
            let speak = req.body.speak || [];

            let php = req.body.php || null;
            let mysql = req.body.mysql || null;
            let laravel = req.body.laravel || null;
            let oracle = req.body.oracle || null;       

            let ref_name = req.body.ref_name || null;
            let ref_contactno = req.body.ref_contactno || null;
            let ref_relation = req.body.ref_relation || null;

            let prefered_location = req.body.preferedlocation || null;
            let notice_period = req.body.noticeperiod || null;
            let expected_ctc = req.body.expectedctc || null;
            let current_ctc = req.body.currentctc || null;
            let department = req.body.department || null;

            let sql_basic_update = `UPDATE employeebasic_details SET firstname = '${b_fname}', lastname = '${b_lname}', dob= '${b_dob}', email ='${b_email}', phoneno = '${b_phoneno}', address1= '${b_address1}', address2 = '${b_address2}', designation='${b_designation}', gender_id='${b_gender}', relationship_id = '${b_relationship}',city='${b_city}', zipcode ='${b_zipcode}' WHERE emp_id = '${empid}'`;
            await db.promise().query(sql_basic_update);
            // Education Details
            for (let i = 0; i < e_nameofboard.length; i++) {
                if (e_nameofboard[i]) {
                    let sql_education_update = `UPDATE education_detail SET edu_id = '${e_nameofboard[i]}', passingyear = '${e_passingyear[i]}', percentage = '${e_percentage[i]}' WHERE  edu_empid = '${empid}' AND id = '${education_id[i]}'`;
                    await db.promise().query(sql_education_update);
                }
            }
            // Work Experience
            for (let i = 0; i < w_companyname.length; i++) {
                if (w_companyname[i]) {
                    let sql_workexp_update = `UPDATE workexperience SET companyname = '${w_companyname[i]}', work_from = '${w_from[i]}', work_to = '${w_to[i]}', designation = '${w_designation[i]}' WHERE work_empid = '${empid}' AND id = '${work_record_id[i]}'`;
                    await db.promise().query(sql_workexp_update);
                }
            }
            //language
            for (let i = 0; i < language_name.length; i++) {
                if (language_name[i]) {
                    if (!read[i]) { read[i] = 0 };
                    if (!write[i]) { write[i] = 0 };
                    if (!speak[i]) { speak[i] = 0 };
                    let sql_language_update = `UPDATE language_tbl SET lang_id = '${language_name[i]}', read_id= '${read[i]}', write_id='${write[i]}', speak_id='${speak[i]}' WHERE language_empid = '${empid}' AND id = '${language_id[i]}'`;
                    await db.promise().query(sql_language_update);
                }
            }
            // Technologies 
            let tech = req.body.tech || [];
            for (let i = 0; i < tech_record.length; i++) {
                if (tech[i]) {
                    let sql_tech = `UPDATE technologies_tbl SET technologies_id='${tech[i]}', skilllevel_id=? WHERE  id='${tech_record[i]}'AND empid = '${empid}'`;
                    if (tech[i] == 1) {await db.promise().query(sql_tech, [php]); }
                    if (tech[i] == 2) {await db.promise().query(sql_tech, [mysql]); }
                    if (tech[i] == 3) {await db.promise().query(sql_tech, [laravel]); }
                    if (tech[i] == 4) {await db.promise().query(sql_tech, [oracle]); }
                }
            }
            // Reference Contact
            let reference_record = req.body.referenceRecord;
            for (let i = 0; i < ref_name.length; i++) {
                if (ref_name[i]) {
                    let sql_reference_update = `UPDATE referencecontact_tbl SET name = '${ref_name[i]}', contactno = '${ref_contactno[i]}', relation =  '${ref_relation[i]}' WHERE ref_empid = '${empid}' AND referencecontact_id = '${reference_record[i]}'`;
                    await db.promise().query(sql_reference_update);
                }
            }
            // preference 
            let sql_pref_update = `UPDATE preference_tbl SET prefered_location = '${prefered_location}', noticeperiod = '${notice_period}', expectedctc =  '${expected_ctc}', currentctc = '${current_ctc}', department_id = '${department}' WHERE pref_empid = '${empid}'`;
            await db.promise().query(sql_pref_update);
            res.redirect("/nodetask/crud/grid");
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {get_data,post_data, data_grid, get_updatedata, post_updatedata};