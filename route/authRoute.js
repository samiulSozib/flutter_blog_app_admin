const router=require('express').Router()
const {register,updateUser,deleteUsre,getUser,loginUser,checkUsername}=require('../controller/authController')
const {checkToken}=require('../middleware/checkToken')

router.post('/register',register)
router.patch('/update/:username',checkToken,updateUser)
router.delete('/delete/:username',checkToken,deleteUsre)
router.get('/:username',checkToken,getUser)
router.post('/login',loginUser)
router.get('/chceckusername/:username',checkUsername)

module.exports=router