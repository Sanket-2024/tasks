const express = require('express');
const {getdatatask11,postdatatask11, datagridtask11, getUpdatedatatask11, postUpdatedatatask11 } = require("../controller/crud_ajax_task11");
const crudroute = express.Router();

crudroute.route("/crud").get(getdatatask11).post(postdatatask11);
crudroute.route("/crud/grid").get(datagridtask11);
crudroute.route("/crud/update").get(getUpdatedatatask11).post(postUpdatedatatask11);


module.exports = crudroute; 