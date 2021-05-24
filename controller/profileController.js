
const Profile=require('../model/Profile')

exports.addProfileController=async(req,res,next)=>{
    const profile=Profile({
        username:req.decoded.username,
        name:req.body.name,
        title:req.body.title,
        about:req.body.about

    });

    profile.save()
        .then(()=>{
            return res.json({msg:"Profile created success"})
        }).catch((error)=>{
            return res.status(400).json({error:error})
        })
}

exports.checkProfile=async(req,res,next)=>{
    Profile.findOne({username:req.decoded.username},(error,result)=>{
        if(error) {
            return res.json({message:error})
        }
        else if(result==null){
            return res.json({Status:false});
        }else{
            return res.json({Status:true});
        }
    })
}