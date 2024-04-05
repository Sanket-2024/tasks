const express = require('express');
const {fetch_fun_one, fetch_fun_two} = require("../controller/fetch_api");
const fetch_route = express.Router();

fetch_route.route("/fetch_task10").get(fetch_fun_one);
fetch_route.route("/fetch_task10/detail/:id").get(fetch_fun_two);

module.exports = fetch_route; 