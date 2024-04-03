const express = require('express');
const {search_task} = require("../controller/searching");
const search_route = express.Router();

search_route.route("/search_task05").get(search_task);

module.exports = search_route; 