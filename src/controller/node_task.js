const express = require('express');
const app  = express();

const node_task = async(req,res)=>{

    res.render("../views/node_task");

}

module.exports = {node_task};