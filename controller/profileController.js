
const Profile=require('../model/Profile')

exports.addProfileController=async(req,res,next)=>{
    const profile=Profile({
        username:req.decoded.username,
        name:req.body.name,
        title:req.body.title,
        abouut:req.body.about

    });

    profile.save()
        .then(()=>{
            return res.json({msg:"Profile created success"})
        }).catch((error)=>{
            return res.status(400).json({error:error})
        })
}