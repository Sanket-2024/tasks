var express = require('express');
const {post_register, post_login, get_password, post_password, get_login, get_register, home} = require('../controller/authentication');
const login = express.Router();


login.route("/").get(get_register);
login.route("/").post(post_register);
login.route("/activation/:id").get(get_password).post(post_password);
login.route("/login").get(get_login).post(post_login);
login.route("/home").get(home);
login.route("/jstask");

module.exports = login;