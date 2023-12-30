const express=require('express');
const router =express.Router();
// require controller so that we can map on what path what action should be
const homeCOntroller=require('../controllers/home_controller');

// we are mapping '/' with homw controller
router.get('/',homeCOntroller.home);
console.log("router loaded")


module.exports=router;