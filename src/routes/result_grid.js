const express = require('express');
const {get_result,get_result_data} = require("../controller/result_grid");
const result_route = express.Router();

result_route.route("/result_task07").get(get_result);
result_route.route("/result_task07/data").get(get_result_data);

module.exports = result_route; 