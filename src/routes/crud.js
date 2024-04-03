const express = require('express');
const {get_data,post_data, data_grid, get_updatedata, post_updatedata} = require("../controller/crud");
const crud_route = express.Router();

crud_route.route("/crud").get(get_data).post(post_data);
crud_route.route("/crud/grid").get(data_grid);
crud_route.route("/crud/update").get(get_updatedata).post(post_updatedata);

module.exports = crud_route; 