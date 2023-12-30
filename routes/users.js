const express=require('express');
const router=express.Router();

const profile=require('../controllers/users_controller');

router.get('/profile',profile.userProfiles)
 
module.exports=router;