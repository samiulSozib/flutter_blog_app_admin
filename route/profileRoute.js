const router=require('express').Router()
const {addProfileController,checkProfile}=require('../controller/profileController')
const {checkToken}=require('../middleware/checkToken')
const {uploadPprofileImage}=require('../controller/uploadController')
const upload=require('../middleware/uploadMiddleware')

router.post("/addprofile",checkToken,addProfileController)

router.patch('/addprofile/image',checkToken,upload.single('image'),uploadPprofileImage)

router.get('/checkprofile',checkToken,checkProfile);

module.exports=router