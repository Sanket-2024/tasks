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

const getdatatask11 = async (req, res) => {

    try {
        if (req.cookies.token) {


            var workRecordId = req.body.workRecordId || [];
            var educationId = req.body.educationId || [];
            var languageId = req.body.languageId || [];
            var techrecord = req.body.techrecord || [];

            var empid = req.body.empid || null;
            var b_fname = req.body.b_fname || null;
            var b_lname = req.body.b_lname || null;
            var b_designation = req.body.b_designation || null;
            var b_address1 = req.body.b_address1 || null;
            var b_address2 = req.body.b_address2 || null;
            var b_email = req.body.b_email || null;
            var b_phoneno = req.body.b_phoneno || null;
            var b_city = req.body.b_city || null;
            var b_gender = req.body.b_gender || null;
            var b_zipcode = req.body.b_zipcode || null;
            var b_relationship = req.body.b_relationship || null;
            var b_dob = req.body.b_dob || null;


            var e_nameofboard = req.body.e_nameofboard || [];
            var e_passingyear = req.body.e_passingyear || [];
            var e_percentage = req.body.e_percentage || [];


            var w_companyname = req.body.w_companyname || [];
            var w_designation = req.body.w_designation || [];
            var w_from = req.body.w_from || [];
            var w_to = req.body.w_to || [];


            var l_hindi = req.body.l_hindi;
            var l_read_hindi = req.body.l_read_hindi || 0;
            var l_write_hindi = req.body.l_write_hindi || 0;
            var l_speak_hindi = req.body.l_speak_hindi || 0;
            var l_english = req.body.l_english;
            var l_read_english = req.body.l_read_english || 0;
            var l_write_english = req.body.l_write_english || 0;
            var l_speak_english = req.body.l_speak_english || 0;
            var l_gujarati = req.body.l_gujarati;
            var l_read_gujarati = req.body.l_read_gujarati || 0;
            var l_write_gujarati = req.body.l_write_gujarati || 0;
            var l_speak_gujarati = req.body.l_speak_gujarati || 0;





            var languageName = req.body.languageName || [];
            var read = req.body.read || [];
            var write = req.body.write || [];
            var speak = req.body.speak || [];


            var tech = req.body.tech || [];
            var php = req.body.php || null;
            var mysql = req.body.mysql || null;
            var laravel = req.body.laravel || null;
            var oracle = req.body.oracle || null;



            var ref_name = req.body.ref_name || [];
            var ref_contactno = req.body.ref_contactno || [];
            console.log();
            var ref_relation = req.body.ref_relation || [];

            var preferedlocation = req.body.preferedlocation || null;
            var noticeperiod = req.body.noticeperiod || null;
            var expectedctc = req.body.expectedctc || null;
            var currentctc = req.body.currentctc || null;
            var department = req.body.department || null;




            res.render('../views/form', { workRecordId, educationId, languageId, techrecord, empid, b_fname, b_lname, b_designation, b_address1, b_address2, b_email, b_phoneno, b_city, b_gender, b_zipcode, b_relationship, b_dob, e_nameofboard, e_passingyear, e_percentage, w_companyname, w_designation, w_from, w_to, languageName, read, write, speak, tech, php, mysql, laravel, oracle, ref_name, ref_contactno, ref_relation, preferedlocation, noticeperiod, expectedctc, currentctc, department });

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }
};


const postdatatask11 = async (req,res)=>{

    try {
        if (req.cookies.token) {
            console.log(req.body);

            var b_fname = req.body.b_fname || null;
            var b_lname = req.body.b_lname || null;
            var b_designation = req.body.b_designation || null;
            var b_address1 = req.body.b_address1 || null;
            var b_address2 = req.body.b_address2 || null;
            var b_email = req.body.b_email || null;
            var b_phoneno = req.body.b_phoneno || null;
            var b_city = req.body.b_city || null;
            var b_gender = req.body.b_gender || null;
            var b_zipcode = req.body.b_zipcode || null;
            var b_relationship = req.body.b_relationship || null;
            var b_dob = req.body.b_dob || null;
            
            var e_nameofboard = req.body.e_nameofboard || [];
            var e_passingyear = req.body.e_passingyear || [];
            var e_percentage = req.body.e_percentage || [];

           
            var w_companyname = req.body.w_companyname || [];
            var w_designation = req.body.w_designation || [];
            var w_from = req.body.w_from || [];
            var w_to = req.body.w_to || [];


            var l_hindi = req.body.l_hindi;
            var l_read_hindi = req.body.l_read_hindi || 0;
            var l_write_hindi = req.body.l_write_hindi || 0;
            var l_speak_hindi = req.body.l_speak_hindi || 0;
            var l_english = req.body.l_english;
            var l_read_english = req.body.l_read_english || 0;
            var l_write_english = req.body.l_write_english || 0;
            var l_speak_english = req.body.l_speak_english || 0;
            var l_gujarati = req.body.l_gujarati;
            var l_read_gujarati = req.body.l_read_gujarati || 0;
            var l_write_gujarati = req.body.l_write_gujarati || 0;
            var l_speak_gujarati = req.body.l_speak_gujarati || 0;



            var languageName = req.body.languageName || [];
            var read = req.body.read || [];
            var write = req.body.write || [];
            var speak = req.body.speak || [];


            var tech = req.body.tech || [];
            var php_check = req.body.php_check;
            var php = req.body.php || null;
            var mysql_check = req.body.mysql_check;
            var mysql = req.body.mysql || null;
            var laravel_check = req.body.laravel_check;
            var laravel = req.body.laravel || null;
            var oracle_check = req.body.oracle_check;
            var oracle = req.body.oracle || null;

            

            var ref_name = req.body.ref_name || [];
            var ref_contactno = req.body.ref_contactno || [];
            console.log();
            var ref_relation = req.body.ref_relation || [];

            var preferedlocation = req.body.preferedlocation || null;
            var noticeperiod = req.body.noticeperiod || null;
            var expectedctc = req.body.expectedctc || null;
            var currentctc = req.body.currentctc || null;
            var department = req.body.department || null;

            var sqlBasic = `INSERT INTO employeebasic_details(firstname, lastname, dob, email, phoneno, address1, address2, designation, gender_id, relationship_id,city, zipcode) VALUES('${b_fname}', '${b_lname}', '${b_dob}', '${b_email}', '${b_phoneno}', '${b_address1}', '${b_address2}', '${b_designation}', '${b_gender}', '${b_relationship}','${b_city}', '${b_zipcode}');`

            const basicDtl = await a.promise().query(sqlBasic);
            console.log(basicDtl);

            const employee_id = basicDtl[0].insertId;

            // Education Details

            for (let i = 0; i < e_nameofboard.length; i++) {

                if (e_nameofboard[i]) {
                    var sqlEducation = `INSERT INTO education_detail(edu_id, passingyear, percentage, edu_empid) VALUES('${e_nameofboard[i]}','${e_passingyear[i]}', '${e_percentage[i]}', '${employee_id}')`;

                    const eduDtl = await a.promise().query(sqlEducation);
                    console.log(eduDtl);
                }

            }

            // Work Experience

            for (let i = 0; i < w_companyname.length; i++) {

                if (w_companyname[i]) {

                    var sqlWorkExp = `INSERT INTO workexperience (work_empid,companyname,work_from,work_to,designation) VALUES('${employee_id}','${w_companyname[i]}', '${w_from[i]}', '${w_to[i]}', '${w_designation[i]}')`;

                    const workDtl = await a.promise().query(sqlWorkExp);
                    console.log(workDtl);

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

            

            var sqlLanguage1 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${languageName[0]}','${read[0]}','${write[0]}','${speak[0]}')`;
            var sqlLanguage2 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${languageName[1]}','${read[1]}','${write[1]}','${speak[1]}')`;
            var sqlLanguage3 = `INSERT INTO language_tbl(language_empid, lang_id, read_id, write_id, speak_id) VALUES(${employee_id},'${languageName[2]}','${read[2]}','${write[2]}','${speak[2]}')`;

            const languageinsert1 = await a.promise().query(sqlLanguage1);
            const languageinsert2 = await a.promise().query(sqlLanguage2);
            const languageinsert3 = await a.promise().query(sqlLanguage3);
            // console.log(languageinsert);
            // }

            // }


            // Technologies 

            var tech = req.body.tech || [];

            


            var sqlTech = `INSERT INTO technologies_tbl(empid, technologies_id, skilllevel_id) VALUES(${employee_id},?,?)`;

            if (tech[0]) { const phptechDtl = await a.promise().query(sqlTech, [tech[0], php]); console.log(phptechDtl); }
            if (tech[1]) { const mysqltechDtl = await a.promise().query(sqlTech, [tech[1], mysql]); console.log(mysqltechDtl); }
            if (tech[2]) { const laraveltechDtl = await a.promise().query(sqlTech, [tech[2], laravel]); console.log(laraveltechDtl); }
            if (tech[3]) { const oracletechDtl = await a.promise().query(sqlTech, [tech[3], oracle]); console.log(oracletechDtl); }


            // Reference Contact

            for (let i = 0; i < ref_name.length; i++) {

                if (ref_name[i]) {

                    var sqlReference = `INSERT INTO referencecontact_tbl(ref_empid, name, contactno, relation) VALUES(${employee_id}, '${ref_name[i]}', '${ref_contactno[i]}', '${ref_relation[i]}')`;

                    const refDtl = await a.promise().query(sqlReference);

                    console.log(refDtl);

                }

            }

            // preference 

            var sqlPref = `INSERT INTO preference_tbl(pref_empid, prefered_location, noticeperiod, expectedctc, currentctc, department_id) VALUES(${employee_id}, '${preferedlocation}', '${noticeperiod}', '${expectedctc}', '${currentctc}', '${department}')`;

            const prefDtl = await a.promise().query(sqlPref);
            console.log(prefDtl);


            // res.render('./pages/ajax_form_data',{employee_id});

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }


}


const datagridtask11 = async (req,res)=>{

    try {
        if (req.cookies.token) {

            var p = req.query.page || 1;
            const limit = 20;
            const offset = (Number(p) - 1) * limit;
            const lastpage = Math.ceil(300 / limit);



            var tsql = `SELECT * FROM employeebasic_details limit ${limit} offset ${offset} ;`

            const sd = await a.promise().query(tsql);
            console.log(sd);


            console.log(sd[0].length);

            res.render('../views/ajax_form_data', { sd, lastpage, p });
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }


} 

const getUpdatedatatask11 = async (req,res)=>{

    try {
        if (req.cookies.token) {

            var insertedId = req.query.id || 1;
            console.log(insertedId);

            var sqlBasicSelect = `SELECT * FROM employeebasic_details WHERE emp_id = ${insertedId}`;
            var sqlEduSelect = `SELECT * FROM education_detail WHERE edu_empid = ${insertedId}`;
            var sqlWorkSelect = `SELECT * FROM workexperience WHERE work_empid = ${insertedId}`;
            var sqlLanguageSelect = `SELECT * FROM language_tbl WHERE language_empid = ${insertedId}`;
            var sqltechSelect = `SELECT * FROM technologies_tbl WHERE empid = ${insertedId}`;
            var sqlrefSelect = `SELECT * FROM referencecontact_tbl WHERE ref_empid = ${insertedId}`;
            var sqlprefSelect = `SELECT * FROM preference_tbl WHERE pref_empid = ${insertedId}`;

            const UbasicDtl = await a.promise().query(sqlBasicSelect);
            console.log(UbasicDtl);
            const UeduDtl = await a.promise().query(sqlEduSelect);
            console.log(UeduDtl);
            const UworkDtl = await a.promise().query(sqlWorkSelect);
            if (!UworkDtl) {
                const UworkDtl = [];
            }
            console.log(UworkDtl);
            const UlangDtl = await a.promise().query(sqlLanguageSelect);
            if (!UlangDtl) {
                const UlangDtl = [];
            }
            console.log(UlangDtl);
            const UtechDtl = await a.promise().query(sqltechSelect);
            if (!UtechDtl) {
                const UtechDtl = [];
            }
            console.log(UtechDtl);
            const UrefDtl = await a.promise().query(sqlrefSelect);
            if (!UrefDtl) {
                const UrefDtl = [];
            }
            console.log(UrefDtl);
            const UprefDtl = await a.promise().query(sqlprefSelect) || [];
            console.log(UprefDtl);

            console.log(UbasicDtl[0][0].emp_id);
            // console.log(UprefDtl[0][0].prefered_location);

            res.render('../views/UpdateForm', { UbasicDtl, UeduDtl, UworkDtl, UlangDtl, UtechDtl, UrefDtl, UprefDtl });

        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}

const postUpdatedatatask11 = async (req,res)=>{

    try {
        if (req.cookies.token) {

            console.log(req.body);

            var workRecordId = req.body.workRecordId || [];
            var educationId = req.body.educationId || [];
            var languageId = req.body.languageId || [];
            var techrecord = req.body.techrecord || [];


            var empid = req.body.empid || 100;
            console.log(empid);
            var b_fname = req.body.b_fname;
            var b_lname = req.body.b_lname;
            var b_designation = req.body.b_designation;
            var b_address1 = req.body.b_address1;
            var b_address2 = req.body.b_address2;
            var b_email = req.body.b_email;
            var b_phoneno = req.body.b_phoneno;
            var b_city = req.body.b_city;
            var b_gender = req.body.b_gender;
            var b_zipcode = req.body.b_zipcode;
            var b_relationship = req.body.b_relationship;
            var b_dob = req.body.b_dob;
           
           

            var e_nameofboard = req.body.e_nameofboard;
            var e_passingyear = req.body.e_passingyear;
            var e_percentage = req.body.e_percentage;

           

            var w_companyname = req.body.w_companyname;
            var w_designation = req.body.w_designation;
            var w_from = req.body.w_from;
            var w_to = req.body.w_to;


            var l_hindi = req.body.l_hindi;
            var l_read_hindi = req.body.l_read_hindi || 0;
            var l_write_hindi = req.body.l_write_hindi || 0;
            var l_speak_hindi = req.body.l_speak_hindi || 0;
            var l_english = req.body.l_english;
            var l_read_english = req.body.l_read_english || 0;
            var l_write_english = req.body.l_write_english || 0;
            var l_speak_english = req.body.l_speak_english || 0;
            var l_gujarati = req.body.l_gujarati;
            var l_read_gujarati = req.body.l_read_gujarati || 0;
            var l_write_gujarati = req.body.l_write_gujarati || 0;
            var l_speak_gujarati = req.body.l_speak_gujarati || 0;

          
            var languageName = req.body.languageName || [];
            var read = req.body.read || [];
            var write = req.body.write || [];
            var speak = req.body.speak || [];


            var php_check = req.body.php_check || null;
            var php = req.body.php || null;
            var mysql_check = req.body.mysql_check || null;
            var mysql = req.body.mysql || null;
            var laravel_check = req.body.laravel_check || null;
            var laravel = req.body.laravel || null;
            var oracle_check = req.body.oracle_check || null;
            var oracle = req.body.oracle || null;

           

            var ref_name = req.body.ref_name || null;
            var ref_contactno = req.body.ref_contactno || null;
            console.log();
            var ref_relation = req.body.ref_relation || null;

            var preferedlocation = req.body.preferedlocation || null;
            var noticeperiod = req.body.noticeperiod || null;
            var expectedctc = req.body.expectedctc || null;
            var currentctc = req.body.currentctc || null;
            var department = req.body.department || null;
            console.log(req.body);

            var sqlBasicUpdate = `UPDATE employeebasic_details SET firstname = '${b_fname}', lastname = '${b_lname}', dob= '${b_dob}', email ='${b_email}', phoneno = '${b_phoneno}', address1= '${b_address1}', address2 = '${b_address2}', designation='${b_designation}', gender_id='${b_gender}', relationship_id = '${b_relationship}',city='${b_city}', zipcode ='${b_zipcode}' WHERE emp_id = '${empid}'`;

            const updatebasicDtl = await a.promise().query(sqlBasicUpdate);
            console.log(updatebasicDtl);


            // Education Details

            for (let i = 0; i < e_nameofboard.length; i++) {

                if (e_nameofboard[i]) {

                    var sqlEducationUpdate = `UPDATE education_detail SET edu_id = '${e_nameofboard[i]}', passingyear = '${e_passingyear[i]}', percentage = '${e_percentage[i]}' WHERE  edu_empid = '${empid}' AND id = '${educationId[i]}'`;


                    const updateEduDtl = await a.promise().query(sqlEducationUpdate);
                    console.log(updateEduDtl);
                }

            }

            // Work Experience

            for (let i = 0; i < w_companyname.length; i++) {

                if (w_companyname[i]) {

                    var sqlWorkExpUpdate = `UPDATE workexperience SET companyname = '${w_companyname[i]}', work_from = '${w_from[i]}', work_to = '${w_to[i]}', designation = '${w_designation[i]}' WHERE work_empid = '${empid}' AND id = '${workRecordId[i]}'`;

                    const WorkExpup = await a.promise().query(sqlWorkExpUpdate);
                    console.log(WorkExpup);

                }

            }

            



            for (let i = 0; i < languageName.length; i++) {

                if (languageName[i]) {

                    if (!read[i]) { read[i] = 0 };
                    if (!write[i]) { write[i] = 0 };
                    if (!speak[i]) { speak[i] = 0 };

                    var sqlLanguageUpdate = `UPDATE language_tbl SET lang_id = '${languageName[i]}', read_id= '${read[i]}', write_id='${write[i]}', speak_id='${speak[i]}' WHERE language_empid = '${empid}' AND id = '${languageId[i]}'`;


                    const languageUpdate = await a.promise().query(sqlLanguageUpdate);
                    console.log(languageUpdate);
                }

            }

            // Technologies 
            var tech = req.body.tech || [];

            for (let i = 0; i < techrecord.length; i++) {

                if (tech[i]) {
                    var sqlTech = `UPDATE technologies_tbl SET technologies_id='${tech[i]}', skilllevel_id=? WHERE  id='${techrecord[i]}'AND empid = '${empid}'`;

                    if (tech[i] == 1) { const phptechDtl = await a.promise().query(sqlTech, [php]); console.log(phptechDtl); }
                    if (tech[i] == 2) { const mysqltechDtl = await a.promise().query(sqlTech, [mysql]); console.log(mysqltechDtl); }
                    if (tech[i] == 3) { const laraveltechDtl = await a.promise().query(sqlTech, [laravel]); console.log(laraveltechDtl); }
                    if (tech[i] == 4) { const oracletechDtl = await a.promise().query(sqlTech, [oracle]); console.log(oracletechDtl); }

                }
            }

            // Reference Contact
            var referenceRecord = req.body.referenceRecord;

            for (let i = 0; i < ref_name.length; i++) {

                if (ref_name[i]) {

                    var sqlReferenceUpdate = `UPDATE referencecontact_tbl SET name = '${ref_name[i]}', contactno = '${ref_contactno[i]}', relation =  '${ref_relation[i]}' WHERE ref_empid = '${empid}' AND referencecontact_id = '${referenceRecord[i]}'`;


                    const refDtl = await a.promise().query(sqlReferenceUpdate);

                    console.log(refDtl);

                }

            }


            // preference 

            var sqlPrefUpdate = `UPDATE preference_tbl SET prefered_location = '${preferedlocation}', noticeperiod = '${noticeperiod}', expectedctc =  '${expectedctc}', currentctc = '${currentctc}', department_id = '${department}' WHERE pref_empid = '${empid}'`;


            const prefDtl = await a.promise().query(sqlPrefUpdate);
            console.log(prefDtl);



            res.redirect("/nodetask/crud/grid");
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
    }

}


module.exports = {getdatatask11,postdatatask11, datagridtask11, getUpdatedatatask11, postUpdatedatatask11 };