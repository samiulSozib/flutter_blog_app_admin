const Profile=require('../model/Profile')
const path=require("path")

exports.uploadPprofileImage=async(req,res,next)=>{
    if(req.file){
        try{
            await Profile.findOneAndUpdate(
                {
                    username:req.decoded.username
                },{
                    $set:{
                        // image:req.file.path
                        image:`/uploads/${req.file.filename}`
                    }
                },{
                    new:true
                },(error,profile)=>{
                    if(error){
                        return res.status(500).send(error)
                    }
                    const response={
                        message:"successfully added image",
                        data:profile
                    };
                    return res.status(200).send(response)
                }
            )
        }catch(e){
            res.json({
                msg:"something wrong"
            })
        }
    }
}