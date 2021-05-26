const router=require('express').Router()
const {checkToken}=require('../middleware/checkToken')
const {createPostController,getOwnPost,getOthersPost,deletePost}=require('../controller/postController')
const uploadPostImage=require('../middleware/uploadPostImage')
const {uploadPostCoverImage}=require('../controller/uploadController')


router.post('/create-post',checkToken,createPostController)
router.get('/get-my-post',checkToken,getOwnPost)
router.get('/get-others-post',checkToken,getOthersPost)
router.delete('/delete/:id',checkToken,deletePost)
router.patch('/create-post/cover-image/:id',checkToken,uploadPostImage.single('image'),uploadPostCoverImage)


module.exports=router