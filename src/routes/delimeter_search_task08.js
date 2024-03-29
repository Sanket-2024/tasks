const express = require('express');
const {getdelimeter} = require("../controller/delimeter_search_task08");
const del = express.Router();

del.route("/delimeter_task08").get(getdelimeter);


module.exports = del; 