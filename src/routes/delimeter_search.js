const express = require('express');
const {get_delimeter} = require("../controller/delimeter_search");
const del = express.Router();

del.route("/delimeter_task08").get(get_delimeter);


module.exports = del; 