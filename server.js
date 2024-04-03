const express = require('express');
const bodyParser = require('body-parser');

const md5 = require('md5');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const l = require('./src/routes/authentication');
const js_route = require('./src/routes/js_excercise');
const search_route = require('./src/routes/searching');
const filter_route = require('./src/routes/filter');
const result_grid = require('./src/routes/result_grid');
const delimeter_search_route = require('./src/routes/delimeter_search');
const sorting_route = require('./src/routes/sorting');
const fetch_api_route = require('./src/routes/fetch_api');
const crud_route = require('./src/routes/crud');
const con = require('./src/config/connection');


var app = express();
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",l);
app.use("/jstask",js_route);
app.use("/nodetask",search_route);
app.use("/nodetask",filter_route);
app.use("/nodetask",result_grid);
app.use("/nodetask",delimeter_search_route);
app.use("/nodetask",sorting_route);
app.use("/nodetask",fetch_api_route);
app.use("/nodetask",crud_route);

app.listen("8888",()=>{
    console.log("Server is listening on port 8888!");
});
