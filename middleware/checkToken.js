const jwt=require('jsonwebtoken')
require('dotenv').config()


exports.checkToken=(req,res,next)=>{
    let token=req.headers['authorization']
    //console.log(token)
    token=token.slice(7,token.length)
    if(token){
        jwt.verify(token,process.env.JWT,(error,decoded)=>{
            if(error){
                return res.json({
                    status:false,
                    msg:token
                })
            }else{
                req.decoded=decoded
                next()
            }
        })
    }else{
        return res.json({
            status:false,
            msg:"TOken is not provide"
        })
    }
}