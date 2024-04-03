const express = require('express');
const bodyParser = require('body-parser');

const md5 = require('md5');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const l = require('./src/routes/authentication');
const js = require('./src/routes/js_excercise');
const t05 = require('./src/routes/searching_task05');
const t06 = require('./src/routes/filter_task06');
const t07 = require('./src/routes/result_task07');
const t08 = require('./src/routes/delimeter_search_task08');
const t09 = require('./src/routes/sorting_task09');
const t10 = require('./src/routes/fetch_api_task10');
const t11 = require('./src/routes/crud_ajax_task11');
const con = require('./src/config/connection');


var app = express();
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",l);
app.use("/jstask",js);
app.use("/nodetask",t05);
app.use("/nodetask",t06);
app.use("/nodetask",t07);
app.use("/nodetask",t08);
app.use("/nodetask",t09);
app.use("/nodetask",t10);
app.use("/nodetask",t11);

app.listen("8888",()=>{
    console.log("Server is listening on port 8888!");
});
