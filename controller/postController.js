const Post=require('../model/Post')

exports.createPostController=async(req,res,next)=>{
    const post=Post({
        username:req.decoded.username,
        title:req.body.title,
        body:req.body.body
    });
    post.save().then((result)=>{
        res.json({data:result})
    }).catch((err)=>{
        console.log(err)
        res.json({error:err})
    })
}