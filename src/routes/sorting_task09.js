const express = require('express');
const {getsort} = require("../controller/sorting_task09");
const sortroute = express.Router();

sortroute.route("/sort_task09").get(getsort);


module.exports = sortroute; 