const router=require('express').Router()
const {addProfileController}=require('../controller/profileController')
const {checkToken}=require('../middleware/checkToken')
const {uploadPprofileImage}=require('../controller/uploadController')
const upload=require('../middleware/uploadMiddleware')

router.post("/addprofile",checkToken,addProfileController)

router.patch('/addprofile/image',checkToken,upload.single('image'),uploadPprofileImage)



module.exports=router