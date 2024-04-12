const express = require("express");
const {javascript_task} = require('../controller/javascript_task');
const javascript_task_route = express.Router();

javascript_task_route.route("/jstask").get(javascript_task);

module.exports = javascript_task_route;