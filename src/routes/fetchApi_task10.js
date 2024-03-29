const express = require('express');
const {fetchfun1, fetchfun2} = require("../controller/fetchApi_task10");
const fetchroute = express.Router();

fetchroute.route("/fetch_task10").get(fetchfun1);
fetchroute.route("/fetch_task10/detail/:id").get(fetchfun2);

module.exports = fetchroute; 