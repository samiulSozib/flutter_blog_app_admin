const router=require('express').Router()
const {checkToken}=require('../middleware/checkToken')
const {createPostController}=require('../controller/postController')
router.post('/create-post',checkToken,createPostController)

module.exports=router