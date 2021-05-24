
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

exports.getProfileData=async(req,res,next)=>{
    await Profile.findOne({
        username:req.decoded.username
    },(error,result)=>{
        if(error){
            return res.json({msg:error})
        }
        if(result==null){
            return res.json({data:[]})
        }else{
            return res.json({data:result})
        }
    })
}

exports.updateProfileData=async(req,res,next)=>{
    let profile={}
    await Profile.findOne({ username: req.decoded.username }, (err, result) => {
        if (err) {
          profile = {};
        }
        if (result != null) {
          profile = result;
        }
      });

      Profile.findOneAndUpdate(
        { username: req.decoded.username },
        {
          $set: {
            name: req.body.name ? req.body.name : profile.name,
            titleline: req.body.titleline ? req.body.titleline : profile.titleline,
            about: req.body.about ? req.body.about : profile.about, 
          },
        },
        { new: true },
        (err, result) => {
          if (err) return res.json({ err: err });
          if (result == null) return res.json({ data: [] });
          else return res.json({ data: result });
        }
      );
    }