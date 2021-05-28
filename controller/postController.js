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


exports.getOwnPost=async(req,res,next)=>{
    Post.find({username:req.decoded.username},(error,result)=>{
        if(error){
            res.json(error)
        }else{
            res.json(result)
        }
    })
}

exports.getOthersPost=async(req,res,next)=>{
    Post.find({username:{$ne:req.decoded.username}},(error,result)=>{
        if(error){
            return res.json(error)
        }else{
            return res.json(result)
        }
    })
}

exports.deletePost=async(req, res,next) => {
    Post.findOneAndDelete(
      {
        $and: [{ username: req.decoded.username }, { _id: req.params.id }],
      },
      (err, result) => {
        if (err) return res.json(err);
        else if (result) {
          console.log(result);
          return res.json("Post deleted");
        }
        return res.json("Post not deleted");
      }
    );
  }


  
exports.getAllPost=async(req,res,next)=>{
    Post.find((error,result)=>{
        if(error){
            return res.json(error)
        }else{
            return res.json({data:result})
        }
    })
}
