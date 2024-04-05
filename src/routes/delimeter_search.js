const express = require('express');
const {get_delimeter} = require("../controller/delimeter_search");
const delimeter_route = express.Router();

delimeter_route.route("/delimeter_task08").get(get_delimeter);


module.exports = delimeter_route; 