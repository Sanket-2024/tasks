const express = require('express');
const {filter} = require("../controller/filter");
const filter_route = express.Router();

filter_route.route("/filter").get(filter);


module.exports = filter_route; 