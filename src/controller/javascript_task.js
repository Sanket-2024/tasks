const express = require('express');
const app  = express();

const javascript_task = async(req,res)=>{
    res.render("../views/javascript_task");
}

module.exports = {javascript_task};