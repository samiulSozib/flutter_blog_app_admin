const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,req.params.id+".jpg")
    }
})

const uploadPostImage=multer({
    storage,
    limits:{
        fileSize:1024*1024*5
    },
    // fileFilter:(req,file,cb)=>{
    //     const types=/jpeg|png|jpg|gif/
    //     const extName=types.test(path.extname(file.originalname).toLowerCase())
    //     const mimeType=types.test(file.mimetype)

    //     if(extName && mimeType){
    //         cb(null,true)
    //     }else{
    //         cb(new Error('Only supported Image required'))
    //     }
    // }
})

module.exports=uploadPostImage