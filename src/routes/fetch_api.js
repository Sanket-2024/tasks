const express = require('express');
const {fetch_fun_one, fetch_fun_two} = require("../controller/fetch_api");
const fetchroute = express.Router();

fetchroute.route("/fetch_task10").get(fetch_fun_one);
fetchroute.route("/fetch_task10/detail/:id").get(fetch_fun_two);

module.exports = fetchroute; 