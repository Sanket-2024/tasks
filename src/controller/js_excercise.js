const express = require('express');
const a = require('../config/connection');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const getDynamicTable = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','table.html'));
}

const getEvents = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','onclick.html'));
}

const getKukuCube = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','game.html'));
}

const getTicTacToe = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','tictactoe.html'))
}

module.exports={ getDynamicTable,getKukuCube,getEvents,getTicTacToe};



