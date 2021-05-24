const router=require('express').Router()
const {addProfileController,checkProfile,getProfileData,updateProfileData}=require('../controller/profileController')
const {checkToken}=require('../middleware/checkToken')
const {uploadPprofileImage}=require('../controller/uploadController')
const upload=require('../middleware/uploadMiddleware')

router.post("/addprofile",checkToken,addProfileController)

router.patch('/addprofile/image',checkToken,upload.single('image'),uploadPprofileImage)

router.get('/checkprofile',checkToken,checkProfile);

router.get('/get-profile-data',checkToken,getProfileData)
router.patch('/update-profile-data',checkToken,updateProfileData)

module.exports=router