const express = require('express');
const {filter1} = require("../controller/filter_task06");
const filter_route = express.Router();

filter_route.route("/filter").get(filter1);


module.exports = filter_route; 