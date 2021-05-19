const router=require('express').Router()
const {addProfileController}=require('../controller/profileController')
const {checkToken}=require('../middleware/checkToken')

router.post("/addprofile",checkToken,addProfileController)



module.exports=router