const router=require('express').Router()
const {checkToken}=require('../middleware/checkToken')
const {createPostController,getOwnPost}=require('../controller/postController')
const uploadPostImage=require('../middleware/uploadPostImage')
const {uploadPostCoverImage}=require('../controller/uploadController')


router.post('/create-post',checkToken,createPostController)
router.get('/get-my-post',checkToken,getOwnPost)
router.patch('/create-post/cover-image/:id',checkToken,uploadPostImage.single('image'),uploadPostCoverImage)


module.exports=router