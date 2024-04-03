const express = require('express');
const {get_dynamic_table, get_kuku_cube, get_tictactoe, get_events} = require("../controller/js_excercise");
const js_route = express.Router();

js_route.route("/dynamic_table").get(get_dynamic_table);
js_route.route("/kuku_cube").get(get_kuku_cube);
js_route.route("/tic_tac_toe").get(get_tictactoe);
js_route.route("/event").get(get_events);

module.exports = js_route; 