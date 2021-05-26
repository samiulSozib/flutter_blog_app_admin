const {Schema,body, model}=require('mongoose')

const postSchema=new Schema({
    username:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        default:""
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:Number,
        default:0
    },
    share:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const Post=model("post",postSchema)
module.exports=Post