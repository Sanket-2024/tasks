const express = require('express');
const {getresult,getresult_data} = require("../controller/result_task07");
const resultroute = express.Router();

resultroute.route("/result_task07").get(getresult);
resultroute.route("/result_task07/data").get(getresult_data);

module.exports = resultroute; 