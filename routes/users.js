const express=require('express');
const router=express.Router();

const profile=require('../controllers/users_controller');

router.get('/profile',profile.userProfiles);

router.get('/signin',profile.userSignIn);
router.get('/signup',profile.userSignUp)
router.post('/create',profile.create)
module.exports=router;