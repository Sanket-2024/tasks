const path = require('path');

const get_dynamic_table = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','table.html'));
}

const get_events = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','onclick.html'));
}

const get_kuku_cube = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','game.html'));
}

const get_tictactoe = async (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public','pages','tictactoe.html'))
}

module.exports={get_dynamic_table, get_kuku_cube, get_tictactoe, get_events};



