const express = require('express');
const {getDynamicTable, getKukuCube, getTicTacToe, getEvents} = require("../controller/js_excercise");
const jsRoute = express.Router();

jsRoute.route("/dynamic_table").get(getDynamicTable);
jsRoute.route("/kuku_cube").get(getKukuCube);
jsRoute.route("/tic_tac_toe").get(getTicTacToe);
jsRoute.route("/event").get(getEvents);

module.exports = jsRoute; 