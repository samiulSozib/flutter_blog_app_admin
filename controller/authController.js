const User=require('../model/User')
const bcrypt=require('bcrypt')
require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.getUser=async(req,res,next)=>{
    await User.findOne(
        {username:req.params.username},
        (error,result)=>{
            if(error) return res.status(500).json({msg:error})
            res.json({
                data:result,
                username:req.params.username
            })
        }
    )
}

exports.checkUsername=async(req,res,next)=>{
    await User.findOne(
        {username:req.params.username},
        (error,result)=>{
            if(error) return res.status(500).json({msg:error})
            if(result!=null){
                return res.json({
                    Status=true
                })
            }else{
                return res.json({
                    Status=false
                })
            }
        }
    )
}

exports.loginUser=async(req,res,next)=>{
    await User.findOne(
        {username:req.body.username},
        async(error,result)=>{
            if(error) return res.status(500).json({msg:error})
            if(result==null){
                return res.status(403).json("Authentication fail")
            }
            let match=await bcrypt.compare(req.body.password,result.password)
            if(match){
                let token=jwt.sign({username:req.body.username},process.env.JWT,{
                    expiresIn:"24h"
                })
                res.json({
                    token,
                    msg:"login success"
                })
            }else{
                res.json("Authentication fail")
            }
        }
    )
}

exports.register=async(req,res,next)=>{
    const password=req.body.password
    const hashPassword=await bcrypt.hash(password,11)
    const user=new User({
        username:req.body.username,
        password:hashPassword,
        email:req.body.email
    })

    await user
    .save()
    .then(()=>{
        console.log('user register')
        res.status(200).json("resgester success")
    }).catch((error)=>{
        res.status(403).json({msg:error})
    })

    //res.json("registerd")
}

exports.updateUser=async(req,res,next)=>{
    let username=req.params.username
    await User.findOneAndUpdate(
        {username},
        {$set:{password:await bcrypt.hash(req.body.password,11)}},
        (err,result)=>{
            if(err) return res.status(500).json({msg:err})
            const msg={
                msg:'Password successfully updated',
                username:req.params.username
            }
            return res.status(200).json(msg)
        }
    )
}

exports.deleteUsre=async(req,res,next)=>{
    await User.findOneAndDelete(
        {username:req.params.username},
        (err,result)=>{
            if(err) return res.status(500).json({msg:err})
            const msg={
                msg:'User deleted success',
                username:req.params.username
            }
            return res.status(200).json(msg)
        }
    )
}