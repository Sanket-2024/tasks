const authenticator = async (req,res,next)=>{
    let {token} = req.cookies;
    if(!token){
        return res.redirect("/login");
    }else{
        next();
    }
}

module.exports = authenticator;