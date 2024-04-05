const express = require("express");
const {node_task} = require('../controller/node_task');
const node_task_route = express.Router();

node_task_route.route("/nodetask").get(node_task);

module.exports = node_task_route;