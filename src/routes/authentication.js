var express = require('express');
var bodyParser = require('body-parser');

const {postregister, postlogin, getpassword, postpassword, getlogin, getregister, home} = require('../controller/authentication');

const a = require('../config/connection');
const login = express.Router();

login.route("/").get(getregister);
login.route("/").post(postregister);
login.route("/activation/:id").get(getpassword).post(postpassword);
login.route("/login").get(getlogin).post(postlogin);
login.route("/home").get(home);

module.exports = login;