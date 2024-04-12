const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const cookie_parser = require('cookie-parser');
// const authenticator_variable = require('./src/middleware/token_file');
const l = require('./src/routes/authentication');
const js_route = require('./src/routes/js_excercise');
const javascript_task_route = require('./src/routes/javascript_task');
const node_task = require('./src/routes/node_task');
const search_route = require('./src/routes/searching');
const filter_route = require('./src/routes/filter');
const result_grid = require('./src/routes/result_grid');
const delimeter_search_route = require('./src/routes/delimeter_search');
const sorting_route = require('./src/routes/sorting');
const fetch_api_route = require('./src/routes/fetch_api');
const crud_route = require('./src/routes/crud');

const app = express();
app.use(cookie_parser());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(body_parser.urlencoded({extended : true}));
// app.use(authenticator_variable);

app.use("/",l);
app.use(javascript_task_route);
app.use(node_task);
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
