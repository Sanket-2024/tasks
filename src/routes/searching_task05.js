const express = require('express');
const {searchTask05} = require("../controller/searching_task05");
const task05 = express.Router();

task05.route("/search_task05").get(searchTask05);

module.exports = task05; 