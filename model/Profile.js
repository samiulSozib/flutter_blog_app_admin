const {Schema,model}=require('mongoose')

const profileSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    image:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

const Profile=model("profile",profileSchema)
module.exports=Profile