const express = require('express');
const {get_sort} = require("../controller/sorting");
const sort_route = express.Router();

sort_route.route("/sort_task09").get(get_sort);


module.exports = sort_route; 